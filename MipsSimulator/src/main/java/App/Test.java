package App;

import Business.Translator;

public class Test {
    public static void main(String[] args) {
        try {
            String binaryString = String.format("%32s", Integer.toBinaryString(Translator.translateInstruction("add $4, $1, $2 "))).replace(' ', '0');
            System.out.println(binaryString);
        }
        catch(Exception exception) {
            System.out.println(exception);
        }
    }
}
