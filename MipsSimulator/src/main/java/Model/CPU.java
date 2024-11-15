package Model;

import java.util.ArrayList;
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

    private final InstructionFetch instructionFetch = new InstructionFetch();
    private final InstructionDecode instructionDecode = new InstructionDecode();
    private final ExecutionUnit executionUnit = new ExecutionUnit();
    private final Memory memory = new Memory();

    private final Register ifId = new Register();
    private final Register idEx = new Register();
    private final Register exMem = new Register();
    private final Register memWb = new Register();

    public CPU(Clock clock)
    {
        List<SynchronousComponent> syncComponents = new ArrayList<>();
        syncComponents.add(ifId);
        syncComponents.add(idEx);
        syncComponents.add(exMem);
        syncComponents.add(memWb);
        syncComponents.add(memory);
        syncComponents.add(instructionDecode);
        syncComponents.add(instructionDecode);

        initRegisters();

        clock.addSynchronousTask(() -> {
            System.out.println("On rising edge");
            executePipeline();
            //commit registers
            for (SynchronousComponent sc : syncComponents)
            {
                sc.commitChanges();
            }
        });
    }

    private void executeTest()
    {
        ifId.setValue(PROG_CNT, instructionFetch.getProgramCounter());
        ifId.setValue(INSTRUCTION, instructionFetch.getInstruction());
        instructionFetch.incrementProgramCounter();
//        idEx.setValue(PROG_CNT, ifId.getValue(PROG_CNT, Integer.class));
//        exMem.setValue(PROG_CNT, idEx.getValue(PROG_CNT, Integer.class));
    }

    private void executePipeline()
    {
        ///Instruction Fetch Stage
        ifId.setValue(INSTRUCTION, instructionFetch.getInstruction());
        instructionFetch.incrementProgramCounter();
        ifId.setValue(PROG_CNT, instructionFetch.getProgramCounter());

        ///Instruction Decode Stage
        int instrId = ifId.getValue(INSTRUCTION, Integer.class);
        ControlSignals idCtrlSig = instructionDecode.getControlSignals(instrId);
        int addr1 = (instrId >> 21) & 0x1f;
        int addr2 = (instrId >> 16) & 0x1f;

        idEx.setValue(CTRL_SIG, idCtrlSig);
        idEx.setValue(PROG_CNT, ifId.getValue(PROG_CNT, Integer.class));
        idEx.setValue(RD1, instructionDecode.readData(addr1));
        idEx.setValue(RD2, instructionDecode.readData(addr2));
        idEx.setValue(SHIFT_AMM, (instrId >> 6) & 0x1f);
        idEx.setValue(EXT_OP, instructionDecode.extendOp(instrId & 0xffff, idCtrlSig.getSignalValue(ControlSignals.Signals.ExtOp)));
        idEx.setValue(FUNC, instrId & 0x3f);
        idEx.setValue(REG_TGT, (instrId >> 16) & 0x1f);
        idEx.setValue(REG_DST, (instrId >> 11) & 0x1f);

        boolean regWrite = memWb.getValue(CTRL_SIG, ControlSignals.class).getSignalValue(ControlSignals.Signals.RegWrite);
        if(regWrite)
        {
            int data = memWb.getValue(CTRL_SIG, ControlSignals.class).getSignalValue(ControlSignals.Signals.MemToReg)
                    ? memWb.getValue(MEM_DATA, Integer.class)
                    : memWb.getValue(ALU_RES, Integer.class);
            int regAddr = memWb.getValue(REG_DST, Integer.class);
            instructionDecode.writeData(regAddr, data);
        }

        ///Execution Stage
        ControlSignals exCtrlSig = idEx.getValue(CTRL_SIG, ControlSignals.class);

        int exOp1 = idEx.getValue(RD1, Integer.class);
        int exOp2 = exCtrlSig.getSignalValue(ControlSignals.Signals.AluSrc)
            ? idEx.getValue(EXT_OP, Integer.class)
            : idEx.getValue(RD2, Integer.class);
        int shiftAmm = idEx.getValue(SHIFT_AMM, Integer.class);
        int func = idEx.getValue(FUNC, Integer.class);
        int finalRegDst = exCtrlSig.getSignalValue(ControlSignals.Signals.RegDst)
            ? idEx.getValue(REG_DST, Integer.class)
            : idEx.getValue(REG_TGT, Integer.class);

        exMem.setValue(CTRL_SIG, exCtrlSig);
        exMem.setValue(ALU_RES, executionUnit.executeInstruction(exOp1, exOp2, shiftAmm, exCtrlSig.aluOp, (byte)func));
        exMem.setValue(RD2, idEx.getValue(RD2, Integer.class));
        exMem.setValue(REG_DST, finalRegDst);

        ///Memory Stage
        ControlSignals memCtrlSig = exMem.getValue(CTRL_SIG, ControlSignals.class);
        int memAluRes = exMem.getValue(ALU_RES, AluRes.class).res;
        if(memCtrlSig.getSignalValue(ControlSignals.Signals.MemWrite))
        {
            memory.writeData(memAluRes, exMem.getValue(RD2, Integer.class));
        }
        else
        {
            memWb.setValue(MEM_DATA, memory.readData(memAluRes));
        }

        memWb.setValue(CTRL_SIG, memCtrlSig);
        memWb.setValue(ALU_RES, memAluRes);
        memWb.setValue(REG_DST, exMem.getValue(REG_DST, Integer.class));
    }

    private void printRegisters()
    {
        System.out.println("IF/ID Clock: " + ifId.getValue(PROG_CNT, Integer.class));
        System.out.println("IF/ID: " + String.format("%x", ifId.getValue(INSTRUCTION, Integer.class)));
        System.out.print("AluRes: " + exMem.getValue(ALU_RES, AluRes.class).res);
//        System.out.println("ID/EX: " + idEx.getValue(PROG_CNT, Integer.class));
//        System.out.println("EX/MEM: " + exMem.getValue(PROG_CNT, Integer.class));
//        System.out.println("MEM/WB: " + memWb.getValue(PROG_CNT, Integer.class));
    }

    private void initRegisters()
    {
        ifId.addField(PROG_CNT, 0);
        ifId.addField(INSTRUCTION, 0);

        idEx.addField(CTRL_SIG, new ControlSignals());
        idEx.addField(PROG_CNT, 0);
        idEx.addField(RD1, 0);
        idEx.addField(RD2, 0);
        idEx.addField(SHIFT_AMM, 0);
        idEx.addField(EXT_OP, 0);
        idEx.addField(FUNC, 0);
        idEx.addField(REG_TGT, 0);
        idEx.addField(REG_DST, 0);

        exMem.addField(CTRL_SIG, new ControlSignals());
        exMem.addField(PROG_CNT, 0);
        exMem.addField(ALU_RES, new AluRes());
        exMem.addField(RD2, 0);
        exMem.addField(REG_DST, 0);

        memWb.addField(CTRL_SIG, new ControlSignals());
        memWb.addField(MEM_DATA, 0);
        memWb.addField(ALU_RES, 0);
        memWb.addField(REG_DST, 0);
    }
}
