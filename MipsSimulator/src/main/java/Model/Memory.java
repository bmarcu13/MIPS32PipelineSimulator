package Model;

import java.util.HashMap;
import java.util.Map;
import java.util.Vector;

public class Memory implements SynchronousComponent {
    private final int memCapacity = 256;
    private final int[] memoryBlock = new int[memCapacity];
    private Map<Integer, Integer> pendingChanges = new HashMap<>();

    public int readData(int addr)
    {
        return memoryBlock[addr];
    }

    public void writeData(int addr, int data)
    {
        pendingChanges.put(addr, data);
    }

    @Override
    public void executeOnClockTick() {

    }

    @Override
    public void commitChanges() {
        for (Map.Entry<Integer, Integer> change : pendingChanges.entrySet())
        {
            memoryBlock[change.getKey()] = change.getValue();
        }
    }
}
