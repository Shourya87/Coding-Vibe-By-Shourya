import java.util.Arrays;
import java.util.Scanner;

public class RotateMatrix {
    
    static void rotateMatrix(int[][] matrix, int r, int c) {
        int[][] ans = new int[c][r];

        for (int i = 0; i < c; i++) {
            for (int j = r-1,k = 0; j >= 0; j--,k++) {
                ans[i][k] = matrix[j][i];
            }
        }
    }
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number of rows and columns of matrix");
        int r = sc.nextInt();
        int c = sc.nextInt();
        int [][] matrix = new int[r][c];
        int totalElements = r*c;
        System.out.println("Enter " + totalElements + " values");
        for (int i = 0; i < r; i++){
            for (int j = 0; j < c; j++){
                matrix[i][j] = sc.nextInt();
            }
        }
        System.out.println("Input Matrix");
        System.out.println(Arrays.deepToString(matrix));

        System.out.println("Rotation of Matrix");
        rotateMatrix(matrix,r,c);
    }
}