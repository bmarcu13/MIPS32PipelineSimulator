package Model;

import javax.naming.ldap.Control;
import java.util.List;

public class CPU {

    private static final String INSTRUCTION = "INSTR";
    private static final String PROG_CNT = "PROG_CNT";
    private static final String RD1 = "RD1";
    private static final String RD2 = "RD2";
    private static final String SHIFT_AMM = "SHIFT_AMM";
    private static final String FUNC = "FUNC";
    private static final String EXT_OP = "EXT_OP";
    private static final String REG_DST = "REG_DST";
    private static final String REG_TGT = "REG_TGT";
    private static final String CTRL_SIG = "CTRL_SIG";
    private static final String ALU_RES = "ALU_RES";
    private static final String MEM_DATA = "MEM_DATA";

    private Clock clock;

    private final InstructionFetch instructionFetch = new InstructionFetch();
    private final InstructionDecode instructionDecode = new InstructionDecode();
    private final ExecutionUnit executionUnit = new ExecutionUnit();
    private final Memory memory = new Memory();

    private Register ifId = new Register();
    private Register idEx = new Register();
    private Register exMem = new Register();
    private Register memWb = new Register();

    public CPU(Clock clock)
    {
        this.clock = clock;
    }

    private void executePipeline()
    {
        ifId.setValue(INSTRUCTION, instructionFetch.getInstruction());
        ifId.setValue(PROG_CNT, instructionFetch.getProgramCounter());

        int instrId = ifId.getValue(INSTRUCTION, Integer.class);
        ControlSignals idCtrlSig = instructionDecode.getControlSignals(instrId);
        int addr1 = (instrId >> 21) & 0x1f;
        int addr2 = (instrId >> 16) & 0x1f;

        if(idCtrlSig.getSignalValue(ControlSignals.Signals.RegWrite))
        {
            int data = memWb.getValue(CTRL_SIG, ControlSignals.class).getSignalValue(ControlSignals.Signals.MemToReg)
                ? memWb.getValue(MEM_DATA, Integer.class)
                : memWb.getValue(ALU_RES, Integer.class);
            int regAddr = memWb.getValue(REG_DST, Integer.class);
            instructionDecode.writeData(regAddr, data);
        }

        idEx.setValue(CTRL_SIG, idCtrlSig);
        idEx.setValue(PROG_CNT, ifId.getValue(PROG_CNT, Integer.class));
        idEx.setValue(RD1, instructionDecode.readData(addr1));
        idEx.setValue(RD2, instructionDecode.readData(addr2));
        idEx.setValue(SHIFT_AMM, (instrId >> 6) & 0x1f);
        idEx.setValue(EXT_OP, instructionDecode.extendOp(instrId & 0xffff, idCtrlSig.getSignalValue(ControlSignals.Signals.ExtOp)));
        idEx.setValue(FUNC, instrId & 0x3f);
        idEx.setValue(REG_TGT, (instrId >> 16) & 0x1f);
        idEx.setValue(REG_DST, (instrId >> 11) & 0x1f);


        ControlSignals exCtrlSig = idEx.getValue(CTRL_SIG, ControlSignals.class);

        int exOp1 = idEx.getValue(RD1, Integer.class);
        int exOp2 = exCtrlSig.getSignalValue(ControlSignals.Signals.AluSrc)
            ? idEx.getValue(EXT_OP, Integer.class)
            : idEx.getValue(RD2, Integer.class);
        int shiftAmm = idEx.getValue(SHIFT_AMM, Integer.class);
        int finalRegDst = exCtrlSig.getSignalValue(ControlSignals.Signals.RegDst)
            ? idEx.getValue(REG_TGT, Integer.class)
            : idEx.getValue(REG_DST, Integer.class);

        exMem.setValue(CTRL_SIG, idEx.getValue(CTRL_SIG, ControlSignals.class));
        exMem.setValue(ALU_RES, executionUnit.executeInstruction(exOp1, exOp2, shiftAmm, exCtrlSig.aluOp));
        exMem.setValue(RD2, idEx.getValue(RD2, Integer.class));
        exMem.setValue(REG_DST, finalRegDst);

        ControlSignals memCtrlSig = exMem.getValue(CTRL_SIG, ControlSignals.class);
        int memAluRes = exMem.getValue(ALU_RES, AluRes.class).res;

        memWb.setValue(CTRL_SIG, memCtrlSig);
        memWb.setValue(MEM_DATA, memory.readData(memAluRes));
        memWb.setValue(ALU_RES, memAluRes);
        memWb.setValue(REG_DST, exMem.getValue(REG_DST, Integer.class));
    }

    private void initRegisters()
    {
        ifId.addField(PROG_CNT);
        ifId.addField(INSTRUCTION);

        idEx.addField(CTRL_SIG);
        idEx.addField(PROG_CNT);
        idEx.addField(RD1);
        idEx.addField(RD2);
        idEx.addField(SHIFT_AMM);
        idEx.addField(EXT_OP);
        idEx.addField(FUNC);
        idEx.addField(REG_TGT);
        idEx.addField(REG_DST);

        exMem.addField(CTRL_SIG);
        exMem.addField(PROG_CNT);
        exMem.addField(ALU_RES);
        exMem.addField(RD2);
        exMem.addField(REG_DST);

        memWb.addField(CTRL_SIG);
        memWb.addField(MEM_DATA);
        memWb.addField(ALU_RES);
        memWb.addField(REG_DST);
    }
}
