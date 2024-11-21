package Presentation;

import Model.AluRes;
import Model.ControlSignals;

import java.util.List;

public interface IView {
    void updateProgramCounterValue(int value);

    void updateJumpData(int jmpAddr, boolean jmp);

    void updateIfIdValues(int programCounter, int instruction);

    void updateIdExValues(ControlSignals cs, int programCounter, int rd1, int rd2, int sa, int opExt, int func, int rt, int rd);

    void updateExMemValues(ControlSignals cs, int branchAddr, AluRes aluRes, int rd2, int dst);

    void updateMemWbValues(ControlSignals cs, int memData, int aluRes, int dst);

    void updateRegisterFileValues(List<Integer> values);

    void updateMemoryValues(List<Integer> values);
}
