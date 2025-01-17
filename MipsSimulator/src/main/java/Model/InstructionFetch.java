package Model;

import jdk.jfr.Unsigned;

import java.util.*;

public class InstructionFetch{
    private final int maxRomCapacity = 64;
    private final int[] instructionMemory = new int[maxRomCapacity];
    private int programCounter = 0;

    public int getProgramCounter()
    {
        return programCounter;
    }

    public void setContents(List<Integer> instructionSet) {
        for (int i = 0; i < maxRomCapacity; i++) {
            instructionMemory[i] = 0;
        }
        for (int i = 0; i < instructionSet.size(); i++) {
            instructionMemory[i] = instructionSet.get(i);
        }
    }

    public Integer getInstruction()
    {
        return instructionMemory[programCounter];
    }

    public void incrementProgramCounter()
    {
        programCounter = (++programCounter % maxRomCapacity);
    }

    public void jumpToAddress(Integer addr)
    {
        if(addr >= maxRomCapacity)
        {
            throw new IllegalArgumentException("Memory address out of bounds");
        }
        programCounter = addr;
    }

    public void resetProgramCounter() {
        programCounter = 0;
    }
}
