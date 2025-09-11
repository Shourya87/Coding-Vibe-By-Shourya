import java.util.Scanner;

public class ReactangleSum2 {
    static int finSum(int[][] matrix, int l1, int r1, int l2, int r2){
        int sum = 0;
        findPrefixSumMatrix(matrix);

        for (int i = r1-1; i < r2; i++){
            // r1 to r2 sum for row i
            sum += matrix[i][l2-1] - matrix[i][l1-2];
        }
        return sum;
    }

    static void findPrefixSumMatrix(int[][] matrix){
        int r = matrix.length;
        int c = matrix[0].length;

        // Traverse horizontally to calcu,ate row-wise prefix sum
        for(int i = 0; i < r; i++){
            for(int j = 1; j < c; j++){
                matrix[i][j] += matrix[i][j-1];
            }
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter number of rows and columns of matrix: ");
        int r = sc.nextInt();
        int c = sc.nextInt();
        int [][] matrix = new int[r][c];
        int totalElements = r*c;
        System.out.println("Enter " + totalElements + " value");
        for(int i = 0; i < r; i++){
            for (int j = 0; j < c; j++){
                matrix[i][j] = sc.nextInt();
            }
        }

        System.out.println("Input Matrix ");
        for(int [] row : matrix){
            for (int val: row){
                System.out.print(val + " ");
            }
            System.out.println();
        }

        System.out.println("Enter rectangle boundaries l1,r1,l2,r2");
        int l1 = sc.nextInt();
        int r1 = sc.nextInt();
        int l2 = sc.nextInt();
        int r2 = sc.nextInt();

       System.out.println(finSum(matrix, l1, r1, l2, r2));
 
    }
}
