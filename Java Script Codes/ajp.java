import java.awt.*;
import java.awt.event.*;
import javax.swing.*;

public class ajp extends JFrame {

  ajp() {
    JButton jb = new JButton("Swap");
    JTextField jt1 = new JTextField(10);
    JTextField jt2 = new JTextField(10);
    add(jt1);
    add(jt2);
    add(jb);
    setLayout(new FlowLayout());
    jb.addActionListener(
      new ActionListener() {
        public void actionPerformed(ActionEvent e) {
          String s1 = jt1.getText();
          jt1.setText(jt2.getText());
          jt2.setText(s1);
        }
      }
    );
    setSize(400, 400);
    setVisible(true);
  }
  public static void main(String[] args) {
    new ajp();
  }
}
