package Presentation;

import Model.AluRes;

import java.util.List;

public interface IView {
    void updateProgramCounterValue(int value);

    void updateIfIdValues(int programCounter, int instruction);

    void updateIdExValues(int programCounter, int rd1, int rd2, int sa, int opExt, int func, int rt, int rd);

    void updateExMemValues(int branchAddr, AluRes aluRes, int rd2, int dst);

    void updateMemWbValues(int memData, int aluRes, int dst);

    void updateRegisterFileValues(List<Integer> values);

    void updateMemoryValues(List<Integer> values);
}
