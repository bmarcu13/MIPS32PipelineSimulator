package View;

import javax.swing.*;
import java.awt.event.ActionListener;

public class MainView extends JFrame{
    private JButton startAutoTickButton;
    private JButton stopAutoTickButton;
    private JButton tickOnceButton;
    private JPanel container;
    private JPanel instrFetchContainer;
    private JPanel execStageContainer;
    private JPanel memStageContainer;
    private JPanel instrDecodeContainer;
    private JPanel writeBackContainer;
    private JTable instrMem;
    private JTable registerFile;
    private JLabel progCntVal;

    public MainView(ActionListener startAutoTickCallback, ActionListener stopAutoTickCallback, ActionListener tickOnceCallback) {
        setContentPane(container);

        startAutoTickButton.addActionListener(startAutoTickCallback);
        stopAutoTickButton.addActionListener(stopAutoTickCallback);
        tickOnceButton.addActionListener(tickOnceCallback);

        setSize(500, 600);
        setVisible(true);
    }

    public void updateInstructionMemory()
    {

    }

    public void updateRegisterFile()
    {

    }
}
