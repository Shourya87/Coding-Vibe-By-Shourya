import java.util.Scanner;

public class Recursion_SeriesSumAltSign{

    //Series Sum with Alternative Sign
    static int seriesSum(int n){
        if (n == 0) return 0;

        if(n % 2 == 0){ // even
            return seriesSum(n-1) - n;
        } else { // odd
            return seriesSum(n-1) + n;
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number for Alt Sign Series: ");
        int n = sc.nextInt();
        System.out.println(seriesSum(n));
    }
}