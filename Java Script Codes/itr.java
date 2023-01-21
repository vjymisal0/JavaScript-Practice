interface Shape
{
	void area();
	void perimeter();
}
class Circle implements Shape
{
	float radius;
	Circle(float radius)
	{
	this.radius = radius;
	}
	public void area()
	{
		double area = 3.14*radius*radius;
		System.out.println("Area of circle: "+area);
	}
	public void perimeter()
	{
		double perimeter = 2*3.14*radius;
		System.out.println("Perimeter of circle: "+perimeter);
	}
}
class Rectangle implements Shape
{
	float length, breadth;
	Rectangle(float length, float breadth)
	{
		this.length = length;
		this.breadth = breadth;
	}
	public void area()
	{
		double area = length*breadth;
		System.out.println("Area of rectangle: "+area);
	}
	public void perimeter()
	{
		double perimeter = 2*(length+breadth);
		System.out.println("Perimeter of rectangle: "+perimeter);
	}
}
class Square implements Shape
{
	float side;
	Square(float side)
	{
		this.side=side;
	}
	public void area()
	{
		double area = side * side;
		System.out.println("Area of square: "+area);
	}
	public void perimeter()
	{
		double perimeter = 4*side;
		System.out.println("Perimeter of square: "+perimeter);
	}
}
class Painter
{
	public static void main(String args[])
	{
		System.out.println("*********For Circle Things: \n");
		Shape S1=new Circle(7); //Storing object of class Circle in the reference variable of interface Shape
		S1.area();
		S1.perimeter();
		System.out.println("\n********For Rectangle Things: \n");
		S1=new Rectangle(5.0f,10.0f);  //Storing object of class Rectangle in the reference variable of interface Shape
		S1.area();
		S1.perimeter();
		System.out.println("\n********For Square Things: \n");
		S1=new Square(10);   //Storing object of class Square in the reference variable of interface Shape
		S1.area();
		S1.perimeter();
	}
}









