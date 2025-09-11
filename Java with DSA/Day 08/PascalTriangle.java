import java.util.Arrays;
import java.util.Scanner;

public class PascalTriangle {
    
    static void pascalTriangle(int r){
        int[][] ans = new int[r][];

        for (int i = 0; i < r; i++) {
            //ith row has i+1 columns
            ans[i] = new int [i+1];

            //1st ans last element of every row is 1
            ans[i][0] = ans [i][i] = 1;
            
            for (int j = 1; j < i; j++) {
                ans[i][j] = ans[i-1][j] + ans[i-1][j-1];
            }
        }
        for(int []row: ans){
            System.out.println(Arrays.toString(row).replace("]"," ").replace("[",""));
        }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number of rowws in Pascal's Triangle");
        int n = sc.nextInt();

        System.out.println("Pascal Triangle for " + n + " rows is :");
        pascalTriangle(n);
    }
}
