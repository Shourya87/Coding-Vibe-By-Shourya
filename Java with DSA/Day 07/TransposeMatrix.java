import java.util.Scanner;
import java.util.Arrays;

public class TransposeMatrix {

    static void transposeMatrix(int[][] matrix, int r, int c) {
        int[][] ans = new int[c][r];
        for (int i = 0; i < c; i++) {
            for (int j = 0; j < r; j++) {
                ans[i][j] = matrix[j][i];
            }
        }
        for (int[] row : ans) {
            System.out.println(Arrays.toString(row));
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number of rowws and columns of matrix");
        int r = sc.nextInt();
        int c = sc.nextInt();
        int[][] matrix = new int[r][c];
        int totalElements = r * c;
        System.out.println("Enter " + totalElements + " values");
        for (int i = 0; i < r; i++) {
            for (int j = 0; j < c; j++) {
                matrix[i][j] = sc.nextInt();
            }
        }
        System.out.println("Input Matrix");
        for (int[] row : matrix) {
            System.out.println(Arrays.toString(row));
        }

        System.out.println("Transpose of matrix");
        transposeMatrix(matrix, r, c);
    }

}