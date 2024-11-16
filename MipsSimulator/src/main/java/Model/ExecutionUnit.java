package Model;

public class ExecutionUnit
{
    public AluRes executeInstruction(int op1, int op2, int shiftAmm, byte aluOp, byte func)
    {
        int res = 0 ;

        // add, addi, sw, lw
        if( (aluOp == 0 && func == 0) || aluOp == 1 ||aluOp == 3 ||aluOp == 4)
        {
            res = op1 + op2;
        }
        // sub, subi, beq, bne, bgtz
        else if((aluOp == 0 && func == 1) || aluOp == 2 || aluOp == 5 || aluOp == 6 || aluOp == 7)
        {
            res = op1 - op2;
        }
        else if(aluOp == 0)
        {
            switch (func)
            {
                case 2:
                    res = op2 << shiftAmm;
                    break;
                case 3:
                    res = op2 >> shiftAmm;
                    break;
                case 4:
                    res = op1 & op2;
                    break;
                case 5:
                    res = op1 | op2;
                    break;
                case 6:
                    res = op1 ^ op2;
                    break;
            }
        }
        return new AluRes(res == 0, res);
    }
}
