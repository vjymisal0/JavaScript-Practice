import java.awt.*;
import javax.swing.*;
import javax.swing.tree.*;

/*<applet code=JtreeDemo height=300 width=300> </applet> */

public class JtreeDemo extends JApplet {

  public void init() {
    Container c = getContentPane();

    DefaultMutableTreeNode top = new DefaultMutableTreeNode("Select");

    //Tree for Colors

    DefaultMutableTreeNode col = new DefaultMutableTreeNode("Colors");

    top.add(col);

    DefaultMutableTreeNode red = new DefaultMutableTreeNode("Red");

    col.add(red);

    DefaultMutableTreeNode grn = new DefaultMutableTreeNode("Green");

    col.add(grn);

    DefaultMutableTreeNode blue = new DefaultMutableTreeNode("Blue");

    col.add(blue);

    //Tree for Fruits

    DefaultMutableTreeNode fr = new DefaultMutableTreeNode("Fruits");

    top.add(fr);

    DefaultMutableTreeNode or = new DefaultMutableTreeNode("Orange");

    fr.add(or);

    DefaultMutableTreeNode man = new DefaultMutableTreeNode("Mango");

    fr.add(man);

    DefaultMutableTreeNode app = new DefaultMutableTreeNode("Apple");

    fr.add(app);

    JTree jt = new JTree(top);

    int v = ScrollPaneConstants.VERTICAL_SCROLLBAR_AS_NEEDED;

    int h = ScrollPaneConstants.HORIZONTAL_SCROLLBAR_AS_NEEDED;

    JScrollPane jsp = new JScrollPane(jt, v, h);

    c.add(jsp);
  }
}
