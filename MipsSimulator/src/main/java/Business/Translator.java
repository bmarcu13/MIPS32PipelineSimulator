package Business;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import Exception.TranslationError;

public class Translator {

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

    public static List<Integer> translateInstructionSet(List<String> instructionSet) throws TranslationError {
        List<Integer> machineCodeInstructionSet = new ArrayList<>();
        int line = 1;
        for (String instruction : instructionSet) {
            try {
                int machineCode = translateInstruction(instruction);
                machineCodeInstructionSet.add(machineCode);
            }
            catch (TranslationError err) {
                String errMsg = err.getMessage();
                throw new TranslationError(String.format("Translation error at line %d: %s", line, errMsg));
            }
            line++;
        }
        return machineCodeInstructionSet;
    }

    private static int translateInstruction(String instruction) throws TranslationError {
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
            case "j":
                return parseJ(instruction, opCode, result[1]);

            case "add", "sub", "and", "or", "xor":
                return parseRType(instructionId, opCode, result[1]);

            case "sll", "srl":
                break;
            case "addi", "subi", "lw", "sw", "bgtz", "be", "bne":
                break;
        }

        throw new TranslationError("Unexpected translation error");
    }

    private static int parseJ(String instruction, int opCode, String instrBody) throws TranslationError {
        Matcher matcher = jumpAddrPattern.matcher(instruction);
        if (!matcher.matches()) {
            throw new TranslationError("Invalid jump address: " + instrBody);
        }
        int address = Integer.parseInt(matcher.group(1), 2);
        return (opCode << 26) | address;
    }

    private static int parseRType(String instructionId, int opCode, String instrBody) throws TranslationError {
        String[] tokens = instrBody.split("\\s*,\\s*"); // split the remaining instruction tokens by ,
        int[] operands = new int[3];
        for(int i = 0; i < tokens.length; i++) {
            Matcher matcher = registerOperandPattern.matcher(tokens[i]); // try to match the token as a valid
            // operand ${number}
            if(!matcher.matches()) {
                throw new TranslationError("Unexpected token " + tokens[i]);
            }
            if(i < 3){ // R-type instruction have exactly 3 register operands
                int op = Integer.parseInt(tokens[i].substring(1));
                if(op > 31) {
                    throw new TranslationError("Register index out of bounds: " + tokens[i]);
                }
                operands[i] = op;
            }
        }
        if(tokens.length != 3) { // there is unexpected text after the 3 valid operands
            throw new TranslationError(
                    String.format("Instruction %s expects 3 operands. Got %d instead.", instructionId, tokens.length)
            );
        }
        if(operands[0] == 0) { // destination register can't be $0
            throw new TranslationError("Use of $0 as destination is forbidden");
        }
        return (opCode << 26) | (operands[1] << 21) | (operands[2] << 16) | (operands[0] << 11) | (instructionFunc.get(instructionId));
    }

    private static int parseRShift(String instructionId, int opCode, String body) throws TranslationError {
        String[] tokens = body.split("\\s*,\\s*"); // split the remaining instruction tokens by ,
        int[] operands = new int[3];
        for(int i = 0; i < tokens.length; i++) {
            Matcher matcher = registerOperandPattern.matcher(tokens[i]); // try to match the token as a valid
            // operand ${number}
            if(!matcher.matches()) {
                throw new TranslationError("Unexpected token " + tokens[i]);
            }
            if(i < 2){ // R-type instruction have exactly 3 register operands
                int op = Integer.parseInt(tokens[i].substring(1));
                if(op > 31) {
                    throw new TranslationError("Register index out of bounds: " + tokens[i]);
                }
                operands[i] = op;
            }
            else if (i == 2){
                try {
                    operands[2] = Integer.parseInt(tokens[2]);
                } catch (NumberFormatException e){
                    throw new TranslationError("Unexpected token" + tokens[i]);
                }
            }
        }
        if(tokens.length != 3) { // there is unexpected text after the 3 valid operands
            throw new TranslationError(
                    String.format("Instruction %s expects 3 operands. Got %d tokens instead.", instructionId, tokens.length)
            );
        }
        if(operands[0] == 0) { // destination register can't be $0
            throw new TranslationError("Use of $0 as destination is forbidden");
        }
        return (opCode << 26) | (operands[1] << 16) | (operands[0] << 11) | (operands[2] << 6) | (instructionFunc.get(instructionId));
    }
}
