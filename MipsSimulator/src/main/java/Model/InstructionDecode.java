package Model;

import java.util.*;

public class InstructionDecode implements SynchronousComponent{
    private final int registerFileCapacity = 32;
    private int[] registerFile = new int[registerFileCapacity];
    private final Map<Integer, Integer> pendingChanges = new HashMap<>();

    public Integer readData(Integer addr)
    {
        return registerFile[addr];
    }

    public void writeData(Integer addr, Integer data)
    {
        pendingChanges.put(addr, data);
    }

    public int extendOp(int op, boolean signExtend)
    {
        if(signExtend)
        {
            return (op << 16) >> 16;
        }
        else
        {
            return op & 0xFFFF;
        }
    }

    public ControlSignals getControlSignals(Integer instruction)
    {
        int opCode = (instruction >> 26) & 0x3f;
        if (opCode == 0)
        {
            return new ControlSignals((byte) 0, ControlSignals.Signals.RegDst, ControlSignals.Signals.RegWrite);
        }
        else
        {
            switch (opCode) {
                case 1: // j
                    return new ControlSignals(
                        (byte) 8,
                        ControlSignals.Signals.Jmp
                    );
                case 2: //beq
                    return new ControlSignals(
                        (byte) 5,
                        ControlSignals.Signals.ExtOp,
                        ControlSignals.Signals.Beq
                    );
                case 3: //bne
                    return new ControlSignals(
                        (byte) 7,
                        ControlSignals.Signals.ExtOp,
                        ControlSignals.Signals.Bne
                    );
                case 4: //bgtz
                    return new ControlSignals(
                        (byte) 6,
                        ControlSignals.Signals.ExtOp,
                        ControlSignals.Signals.Bgtz
                    );
                case 32: // addi
                    return new ControlSignals(
                        (byte) 1,
                        ControlSignals.Signals.ExtOp,
                        ControlSignals.Signals.AluSrc,
                        ControlSignals.Signals.RegWrite
                    );
                case 33: //subi
                    return new ControlSignals(
                        (byte) 2,
                        ControlSignals.Signals.ExtOp,
                        ControlSignals.Signals.AluSrc,
                        ControlSignals.Signals.RegWrite
                    );
                case 34: //lw
                    return new ControlSignals(
                        (byte) 3,
                        ControlSignals.Signals.ExtOp,
                        ControlSignals.Signals.AluSrc,
                        ControlSignals.Signals.MemToReg,
                        ControlSignals.Signals.RegWrite
                    );
                case 35: //sw
                    return new ControlSignals(
                        (byte) 4,
                        ControlSignals.Signals.ExtOp,
                        ControlSignals.Signals.AluSrc,
                        ControlSignals.Signals.MemWrite
                    );
                default:
                    throw new IllegalArgumentException("Unsupported Instruction"); //this should never happen
            }
        }
    }

    public List<Integer> getRfValues() {
        return Arrays.stream(registerFile).boxed().toList();
    }

    @Override
    public void reset() {
        registerFile = new int[registerFileCapacity];
        pendingChanges.clear();
    }

    @Override
    public void commitChanges()
    {
        for (Map.Entry<Integer, Integer> pair : pendingChanges.entrySet())
        {
            registerFile[pair.getKey()] = pair.getValue();
        }
        pendingChanges.clear();
    }
}
