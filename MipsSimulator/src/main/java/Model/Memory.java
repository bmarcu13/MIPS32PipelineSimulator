package Model;

import java.util.Vector;

public class Memory {
    private final int memCapacity = 256;
    private final int[] memoryBlock = new int[memCapacity];

    public int readData(int addr)
    {
        return memoryBlock[addr];
    }

    public void writeData(int addr, int data)
    {
        memoryBlock[addr] = data;
    }
}
