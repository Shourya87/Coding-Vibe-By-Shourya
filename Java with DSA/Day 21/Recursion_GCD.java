import java.util.Scanner;

public class Recursion_GCD {

    // Greatest Common Divisior - GCD
    static void printGcd(int x, int y, int n){
        
        // Base case to stop recursion
        if (n == 0) return;

        // Recursive work
        if(x%n==0 && y%n==0){
            System.out.println("GCD is :" + n);
            return;
        }

        printGcd(x, y, n-1);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number X & Y : ");
        int x = sc.nextInt();
        int y = sc.nextInt();
        int n = Math.min(x, y);
        printGcd(x, y, n);
    }
}
