import java.util.Scanner;

public class Recursion_EuclidAlgo {
    
    // Euclid Algorithm
    static int printEA(int x, int y){
        if (y == 0){
            return x;
        }

        return printEA(y, x%y);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a value of x and y: ");
        int x = sc.nextInt();
        int y = sc.nextInt();
        
        System.out.println(printEA(x, y));
    }
}
