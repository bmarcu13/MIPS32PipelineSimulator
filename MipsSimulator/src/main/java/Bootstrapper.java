import Model.Clock;
import View.MainView;

import java.awt.event.ActionListener;


public class Bootstrapper {

    public static void main(String[] args) {
        Clock clock = new Clock(2000);

        clock.setOnRisingEdge(() -> {
            System.out.println("On rising edge");
        });

        clock.setOnFallingEdge(() -> {
            System.out.println("On falling edge");
        });

        MainView mainView = new MainView(e -> clock.startAutoTick(), e -> {
            try {
                clock.stopAutoTick();
            } catch (InterruptedException ex) {
                throw new RuntimeException(ex);
            }
        }, e -> clock.tick());

    }
}
