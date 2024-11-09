package Model;

import jdk.jfr.Unsigned;

import java.util.Vector;

public class InstructionFetch implements SynchronousComponent{
    private final int maxMemCapacity = 64;
    private Vector<Integer> instructionMemory = new Vector<>(maxMemCapacity);
    private int programCounter = 0;

    public int getProgramCounter()
    {
        return programCounter;
    }

    public Integer getInstruction() throws ArrayIndexOutOfBoundsException
    {
        return instructionMemory.get(programCounter);
    }

    public void incrementProgramCounter()
    {
        programCounter = (++programCounter % maxMemCapacity);
    }

    public void jumpToAddress(Integer addr)
    {
        if(addr >= maxMemCapacity)
        {
            throw new IllegalArgumentException("Memory address out of bounds");
        }

        programCounter = addr;
    }

    @Override
    public void executeOnClockTick() {

    }

    @Override
    public void commitChanges() {

    }
}
