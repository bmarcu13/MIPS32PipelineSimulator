package Model;

import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

public class Clock {
    enum ClockTransition {RISING_EDGE, FALLING_EDGE}
    private boolean value;
    private ClockTransition clockTransition;
    private int clockCycleDuration;
    private boolean isAutoTickEnabled;
    private Runnable onRisingEdge, onFallingEdge;
    private ScheduledExecutorService scheduler;

    public Clock(int clockCycleDuration)
    {
        value = false;
        clockTransition = ClockTransition.RISING_EDGE;
        this.clockCycleDuration = clockCycleDuration;
        isAutoTickEnabled = false;
        scheduler = Executors.newSingleThreadScheduledExecutor();
    }

    public void tick()
    {
        if(onRisingEdge == null || onFallingEdge == null)
        {
            throw new NullPointerException("Callbacks not initialized");
        }
        onRisingEdge.run();
        onFallingEdge.run();
    }

    public void startAutoTick() throws NullPointerException
    {
        if (isAutoTickEnabled)
        {
            return;
        }

        if(onRisingEdge == null || onFallingEdge == null)
        {
            throw new NullPointerException("Callbacks not initialized");
        }

        isAutoTickEnabled = true;
        scheduler.scheduleAtFixedRate(() -> {

            onRisingEdge.run();

            try {
                Thread.sleep(clockCycleDuration / 2);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }

            onFallingEdge.run();

        }, 0, clockCycleDuration, TimeUnit.MILLISECONDS);
    }

    public void stopAutoTick() throws InterruptedException {
        if(isAutoTickEnabled)
        {
            isAutoTickEnabled = false;
            scheduler.shutdown();
            if (!scheduler.awaitTermination(5, TimeUnit.MILLISECONDS))
            {
                scheduler.shutdownNow();
            }

            scheduler = Executors.newSingleThreadScheduledExecutor();
        }
    }

    public Runnable getOnRisingEdge() {
        return onRisingEdge;
    }

    public void setOnRisingEdge(Runnable onRisingEdge) {
        this.onRisingEdge = onRisingEdge;
    }

    public Runnable getOnFallingEdge() {
        return onFallingEdge;
    }

    public void setOnFallingEdge(Runnable onFallingEdge) {
        this.onFallingEdge = onFallingEdge;
    }
}
