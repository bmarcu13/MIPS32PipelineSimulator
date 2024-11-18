package Presentation;

import Model.AluRes;
import com.google.gson.JsonArray;
import com.google.gson.JsonObject;

import java.util.List;

public class WebView implements IView{
    private JsonObject values = new JsonObject();

    public String collect() {
        String payload = values.toString();
        values = new JsonObject();
        return payload;
    }

    @Override
    public void updateProgramCounterValue(int value) {
        values.addProperty("programCounter", value);
    }

    @Override
    public void updateIfIdValues(int programCounter, int instruction) {
        JsonObject ifIdValues = new JsonObject();
        ifIdValues.addProperty("pc", programCounter);
        ifIdValues.addProperty("instr", instruction);
        values.add("if_id", ifIdValues);
    }

    @Override
    public void updateIdExValues(int programCounter, int rd1, int rd2, int sa, int opExt, int func, int rt, int rd) {
        JsonObject idExValues = new JsonObject();

        idExValues.addProperty("pc", programCounter);
        idExValues.addProperty("rd1", rd1);
        idExValues.addProperty("rd2", rd2);
        idExValues.addProperty("sa", sa);
        idExValues.addProperty("opExt", opExt);
        idExValues.addProperty("func", func);
        idExValues.addProperty("rt", rt);
        idExValues.addProperty("rd", rd);

        values.add("id_ex", idExValues);
    }

    @Override
    public void updateExMemValues(int branchAddr, AluRes aluRes, int rd2, int dst) {
        JsonObject exMemValues = new JsonObject();

        exMemValues.addProperty("branchAddr", branchAddr);
        exMemValues.addProperty("zero", aluRes.zero);
        exMemValues.addProperty("aluRes", aluRes.res);
        exMemValues.addProperty("rd2", rd2);
        exMemValues.addProperty("dst", dst);

        values.add("ex_mem", exMemValues);
    }

    @Override
    public void updateMemWbValues(int memData, int aluRes, int dst) {
        JsonObject memWbValues = new JsonObject();

        memWbValues.addProperty("memData", memData);
        memWbValues.addProperty("aluRes", aluRes);
        memWbValues.addProperty("dst", dst);

        values.add("mem_wb", memWbValues);
    }

    @Override
    public void updateRegisterFileValues(List<Integer> regFileValues) {
        JsonArray valuesJsonArray = new JsonArray();
        for (int val : regFileValues) {
            valuesJsonArray.add(val);
        }

        values.add("registerFile", valuesJsonArray);
    }

    @Override
    public void updateMemoryValues(List<Integer> memValues) {
        JsonArray valuesJsonArray = new JsonArray();
        for(int val : memValues) {
            valuesJsonArray.add(val);
        }

        values.add("memory", valuesJsonArray);
    }
}
