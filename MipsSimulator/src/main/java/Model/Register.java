package Model;

import java.util.HashMap;
import java.util.Map;

public class Register implements SynchronousComponent
{

    private final Map<String, Object> fieldValues = new HashMap<>();
    private final Map<String, Object> pendingValues = new HashMap<>();

    public <T> void addField(String fieldName)
    {
        fieldValues.putIfAbsent(fieldName, null);
        pendingValues.putIfAbsent(fieldName, null);
    }

    public <T> void setValue(String fieldName, T value)
    {
        pendingValues.replace(fieldName, value);
    }

    public <T> T getValue(String fieldName, Class<T> type)
    {
        Object obj = fieldValues.get(fieldName);
        if (obj == null)
        {
            throw new IllegalArgumentException("No value for key " + fieldName);
        }
        if (!type.isInstance(obj))
        {
            throw new ClassCastException("Value for " + fieldName + "is not of type " + type.getName());
        }
        return type.cast(obj);

    }

    @Override
    public void executeOnClockTick() {

    }

    @Override
    public void commitChanges() {
        fieldValues.putAll(pendingValues);
    }
}
