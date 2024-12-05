package Model;

import Presentation.IView;

import java.awt.*;
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
    private static final String BRANCH_ADDR = "BRANCH_ADDR";

    private final IView view;

    List<SynchronousComponent> synchronousComponents = new ArrayList<>();

    private final InstructionFetch instructionFetch = new InstructionFetch();
    private final InstructionDecode instructionDecode = new InstructionDecode();
    private final ExecutionUnit executionUnit = new ExecutionUnit();
    private final Memory memory = new Memory();

    private final Register ifId = new Register();
    private final Register idEx = new Register();
    private final Register exMem = new Register();
    private final Register memWb = new Register();

    public CPU(Clock clock, IView view)
    {
        this.view = view;

        synchronousComponents.add(ifId);
        synchronousComponents.add(idEx);
        synchronousComponents.add(exMem);
        synchronousComponents.add(memWb);
        synchronousComponents.add(memory);
        synchronousComponents.add(instructionDecode);
        synchronousComponents.add(instructionDecode);

        initRegisters();
        updateView();

        clock.addSynchronousTask(() -> {
            executePipeline();

            //commit registers
            for (SynchronousComponent sc : synchronousComponents)
            {
                sc.commitChanges();
            }
            updateView();
        });
    }

    public void reset() {
        for(SynchronousComponent sc : synchronousComponents) {
            sc.reset();
        }
        instructionFetch.resetProgramCounter();
        initRegisters();
        updateView();
    }

    public void loadInstructionSet(List<Integer> instructionSet) {
        instructionFetch.setContents(instructionSet);
        reset();
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

        int extOp = idEx.getValue(EXT_OP, Integer.class);
        int exOp1 = idEx.getValue(RD1, Integer.class);
        int exOp2 = exCtrlSig.getSignalValue(ControlSignals.Signals.AluSrc)
            ? extOp
            : idEx.getValue(RD2, Integer.class);
        int shiftAmm = idEx.getValue(SHIFT_AMM, Integer.class);
        int func = idEx.getValue(FUNC, Integer.class);
        int finalRegDst = exCtrlSig.getSignalValue(ControlSignals.Signals.RegDst)
            ? idEx.getValue(REG_DST, Integer.class)
            : idEx.getValue(REG_TGT, Integer.class);

        exMem.setValue(BRANCH_ADDR, extOp);
        exMem.setValue(CTRL_SIG, exCtrlSig);
        exMem.setValue(ALU_RES, executionUnit.executeInstruction(exOp1, exOp2, shiftAmm, exCtrlSig.aluOp, (byte)func));
        exMem.setValue(RD2, idEx.getValue(RD2, Integer.class));
        exMem.setValue(REG_DST, finalRegDst);

        ///Memory Stage
        ControlSignals memCtrlSig = exMem.getValue(CTRL_SIG, ControlSignals.class);
        int memAluRes = exMem.getValue(ALU_RES, AluRes.class).res;
        if(memCtrlSig.getSignalValue(ControlSignals.Signals.MemWrite))
        {
            System.out.println("Addr: " + memAluRes + "; Data: " + exMem.getValue(RD2, Integer.class));
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

    private void updateView() {
        view.updateProgramCounterValue(instructionFetch.getProgramCounter());

        int idInstr = ifId.getValue(INSTRUCTION, Integer.class);

        view.updateJumpData(
                idInstr & 0x3FFFFFF,
                instructionDecode.getControlSignals(idInstr).getSignalValue(ControlSignals.Signals.Jmp)
        );

        view.updateIfIdValues(
                ifId.getValue(PROG_CNT, Integer.class),
                idInstr
        );

        view.updateIdExValues(
                idEx.getValue(CTRL_SIG, ControlSignals.class),
                idEx.getValue(PROG_CNT, Integer.class),
                idEx.getValue(RD1, Integer.class),
                idEx.getValue(RD2, Integer.class),
                idEx.getValue(SHIFT_AMM, Integer.class),
                idEx.getValue(EXT_OP, Integer.class),
                idEx.getValue(FUNC, Integer.class),
                idEx.getValue(REG_TGT, Integer.class),
                idEx.getValue(REG_DST, Integer.class)
        );

        view.updateExMemValues(
                exMem.getValue(CTRL_SIG, ControlSignals.class),
                exMem.getValue(BRANCH_ADDR, Integer.class),
                exMem.getValue(ALU_RES, AluRes.class),
                exMem.getValue(RD2, Integer.class),
                exMem.getValue(REG_DST, Integer.class)
        );

        view.updateMemWbValues(
                memWb.getValue(CTRL_SIG, ControlSignals.class),
                memWb.getValue(MEM_DATA, Integer.class),
                memWb.getValue(ALU_RES, Integer.class),
                memWb.getValue(REG_DST, Integer.class)
        );

        view.updateRegisterFileValues(instructionDecode.getRfValues());
        view.updateMemoryValues(memory.getMemValues());
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
        exMem.addField(BRANCH_ADDR, 0);

        memWb.addField(CTRL_SIG, new ControlSignals());
        memWb.addField(MEM_DATA, 0);
        memWb.addField(ALU_RES, 0);
        memWb.addField(REG_DST, 0);
    }
}
