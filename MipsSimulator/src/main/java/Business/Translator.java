package Business;

import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import Exception.TranslationError;

public class Translator {

    private enum Type {R, I, J}

    private static final Map<String, Integer> instructionOpCodes = new HashMap<>();
    static {
        instructionOpCodes.put("add", 0);
        instructionOpCodes.put("sub", 0);
        instructionOpCodes.put("sll", 0);
        instructionOpCodes.put("srl", 0);
        instructionOpCodes.put("and", 0);
        instructionOpCodes.put("or", 0);
        instructionOpCodes.put("xor", 0);
        instructionOpCodes.put("addi", 32);
        instructionOpCodes.put("subi", 33);
        instructionOpCodes.put("lw", 34);
        instructionOpCodes.put("sw", 35);
        instructionOpCodes.put("j", 1);
        instructionOpCodes.put("beq", 2);
        instructionOpCodes.put("bne", 3);
        instructionOpCodes.put("bgtz", 4);
    }

    private static final Map<String, Integer> instructionFunc = new HashMap<>();
    static {
        instructionFunc.put("add", 0);
        instructionFunc.put("sub", 1);
        instructionFunc.put("sll", 2);
        instructionFunc.put("srl", 3);
        instructionFunc.put("and", 4);
        instructionFunc.put("or", 5);
        instructionFunc.put("xor", 6);
    }


    private static final Pattern jumpAddrPattern = Pattern.compile("j\\s+([0|1]{26})");
    private static final Pattern registerOperandPattern = Pattern.compile("\\$([0-9]+)");

    public static int translateInstruction(String instruction) throws TranslationError {
        instruction = instruction.strip();
        String[] result = instruction.split("\\s+", 2);
        if (result.length == 0) {
            throw new TranslationError("No such instruction: " + instruction);
        }

        String instructionId = result[0];
        Integer opCode = instructionOpCodes.get(instructionId);
        if (opCode == null) {
            throw new TranslationError("No such instruction: " + instructionId);
        }

        switch (instructionId) {
            case "j": {
                Matcher matcher = jumpAddrPattern.matcher(instruction);
                if (!matcher.matches()) {
                    throw new TranslationError("Invalid address: " + result[1]);
                }
                int address = Integer.parseInt(matcher.group(1), 2);
                return (opCode << 26) | address;
            }

            case "add", "sub", "and", "or", "xor": {
                String[] tokens = result[1].split("\\s*,\\s*");
                int[] operands = new int[3];
                for(int i = 0; i < tokens.length; i++) {
                    Matcher matcher = registerOperandPattern.matcher(tokens[i]);
                    if(!matcher.matches()) {
                        throw new TranslationError("Unexpected token " + tokens[i]);
                    }
                    if(i < 3){
                        operands[i] = Integer.parseInt(tokens[i].substring(1));
                    }
                }
                if(tokens.length != 3) {
                    throw new TranslationError(
                            String.format("Instruction %s expects 3 operands. Got %d instead.", instructionId, tokens.length)
                    );
                }
                if(operands[0] == 0) {
                    throw new TranslationError("Use of $0 as destination is forbidden");
                }
                return (opCode << 26) | (operands[1] << 21) | (operands[2] << 16) | (operands[0] << 11) | (instructionFunc.get(instructionId));
            }
            case "sll", "srl":
                break;
            case "addi", "subi", "lw", "sw", "bgtz", "be", "bne":
                break;
        }


        throw new TranslationError("Unexpected translation error");
    }
}
