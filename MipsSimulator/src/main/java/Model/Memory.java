package Model;

import java.util.*;

public class Memory implements DeferredUpdateComponent {
    private final int memCapacity = 256;
    private int[] memoryBlock = new int[memCapacity];
    private Map<Integer, Integer> pendingChanges = new HashMap<>();

    public int readData(int addr)
    {
        return memoryBlock[addr];
    }

    public void writeData(int addr, int data)
    {
        pendingChanges.put(addr, data);
    }

    public List<Integer> getMemValues() {
        return Arrays.stream(memoryBlock).limit(32).boxed().toList();
    }

    @Override
    public void reset() {
        memoryBlock = new int[memCapacity];
        pendingChanges.clear();
    }

    @Override
    public void commitChanges() {
        for (Map.Entry<Integer, Integer> change : pendingChanges.entrySet())
        {
            memoryBlock[change.getKey()] = change.getValue();
        }
    }
}
