import java.util.Scanner;

public class Recursion_1toN {

    static void print1toN(int n) {  // prints 1, 2, 3, ..., n
        if (n == 1) {
            System.out.println(1);
            return;
        }
        print1toN(n - 1);  // first print 1 to n-1
        System.out.println(n);  // then print n
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter value of n: ");
        int n = sc.nextInt();
        print1toN(n);
    }
}