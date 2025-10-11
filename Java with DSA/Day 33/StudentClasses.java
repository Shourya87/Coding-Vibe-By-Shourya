public class StudentClasses {
    
    // Creating a new data type
    public static class Student{
        String name;
        int rollno;
        double percent;
    }

    public static void main(String[] args) {
        Student a = new Student();
        a.name = "Shourya";
        a.rollno = 73;
        a.percent = 68.8;
        System.out.println(a.name);
    }
}
