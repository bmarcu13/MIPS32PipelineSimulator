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

    public InstructionFetch()
    {
        instructionMemory[0] = 0b10000000000000100000000000000101;
        instructionMemory[1] = 0b10000000000000110000000000000011;
        instructionMemory[2] = 0b00000000000000000000000000000000;
        instructionMemory[3] = 0b00000000000000000000000000000000;
        instructionMemory[4] = 0b00000000000000000000000000000000;
        instructionMemory[5] = 0b00000000010000110000100000000000;
        instructionMemory[6] = 0b00000000000000000000000000000000;
        instructionMemory[7] = 0b00000000000000000000000000000000;
        instructionMemory[8] = 0b00000000000000000000000000000000;
        instructionMemory[9] = 0b10001100000000010000000000000000;
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
