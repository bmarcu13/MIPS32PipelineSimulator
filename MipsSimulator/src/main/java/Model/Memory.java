package Model;

import java.util.Vector;

public class Memory {
    private final int memCapacity = 256;
    Vector<Integer> memoryBlock = new Vector<>(memCapacity);

    public int readData(int addr)
    {
        return memoryBlock.get(addr);
    }

    public void writeData(int addr, int data)
    {
        memoryBlock.set(addr, data);
    }
}
