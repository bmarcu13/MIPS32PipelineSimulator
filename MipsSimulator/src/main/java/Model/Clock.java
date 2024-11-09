package Model;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

public class Clock
{
    private boolean value = false;
    private final int clockCycleDuration;
    private boolean isAutoTickEnabled = false;
    private final List<Runnable> onClockTick = new ArrayList<>();
    private ScheduledExecutorService scheduler;

    public Clock(int clockCycleDuration)
    {
        this.clockCycleDuration = clockCycleDuration;
        scheduler = Executors.newSingleThreadScheduledExecutor();
    }

    public void tick()
    {
        for (Runnable task : onClockTick)
        {
            task.run();
        }
    }

    public void startAutoTick() throws NullPointerException
    {
        if (isAutoTickEnabled)
        {
            return;
        }

        isAutoTickEnabled = true;

        scheduler.scheduleAtFixedRate(
            this::tick,
            0,
            clockCycleDuration,
            TimeUnit.MILLISECONDS
        );
    }

    public void stopAutoTick() throws InterruptedException
    {
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

    public void addSynchronousTask(Runnable task)
    {
        this.onClockTick.add(task);
    }
}
