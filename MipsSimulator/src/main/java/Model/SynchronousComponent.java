package Model;

public interface SynchronousComponent {
    void executeOnClockTick();

    void commitChanges();
}
