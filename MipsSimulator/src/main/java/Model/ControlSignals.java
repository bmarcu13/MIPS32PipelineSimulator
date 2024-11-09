package Model;

import java.util.BitSet;

public class ControlSignals {
    public enum Signals{
        RegDst,
        ExtOp,
        AluSrc,
        Beq,
        Bgtz,
        Bne,
        Jmp,
        MemWrite,
        MemToReg,
        RegWrite
    }

    private BitSet signalValues;
    public byte aluOp;

    public ControlSignals()
    {
        signalValues = new BitSet(10);
        this.aluOp = 0;
    }

    public ControlSignals(byte aluOp, Signals... s)
    {
        this.signalValues = new BitSet(10);
        this.aluOp = aluOp;
        for(Signals ss : s)
        {
            signalValues.set(ss.ordinal());
        }
    }

    public boolean getSignalValue(Signals sig)
    {
        return signalValues.get(sig.ordinal());
    }
}
