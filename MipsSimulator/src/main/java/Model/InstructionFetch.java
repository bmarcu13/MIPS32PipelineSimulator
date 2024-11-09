package Model;

import jdk.jfr.Unsigned;

import java.util.Vector;

public class InstructionFetch{
    private final int maxRomCapacity = 64;
    private final int[] instructionMemory = new int[maxRomCapacity];
    private int programCounter = 0;

    public int getProgramCounter()
    {
        return programCounter;
    }

    public InstructionFetch()
    {
        instructionMemory[0] = 6;
        instructionMemory[1] = 9;
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
}
