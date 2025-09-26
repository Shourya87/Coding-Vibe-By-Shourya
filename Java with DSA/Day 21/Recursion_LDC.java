import java.util.Scanner;

public class Recursion_LDC {
    
    // Long Division Code - LDC
    static int printLCD(int x, int y){
        while(x%y != 0){
            int rem = x%y;
            x = y;
            y = rem;
        }

        return y;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a value of x and y: ");
        int x = sc.nextInt();
        int y = sc.nextInt();
        
        System.out.println(printLCD(x, y));
    }
}
