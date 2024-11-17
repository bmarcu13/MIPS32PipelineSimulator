package App;

import Model.CPU;
import Model.Clock;
import View.MainView;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"Communication"})
public class Bootstrapper {

    public static void main(String[] args) {
//        Clock clock = new Clock(2000);
//        CPU cpu = new CPU(clock);

//        MainView mainView = new MainView(e -> clock.startAutoTick(), e -> {
//            try {
//                clock.stopAutoTick();
//            } catch (InterruptedException ex) {
//                throw new RuntimeException(ex);
//            }
//        }, e -> clock.tick());

        SpringApplication.run(Bootstrapper.class, args);
    }
}
