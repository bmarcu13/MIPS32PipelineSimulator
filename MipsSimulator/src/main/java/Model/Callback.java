package Model;

import com.google.gson.JsonObject;

public interface Callback {
    public void execute(JsonObject param);
}
