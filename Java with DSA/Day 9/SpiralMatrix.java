import java.util.Scanner;

public class SpiralMatrix {
    static void spiralMatrix(int n){
    int matrix[][] = new int[n][n];

    int topRow = 0, bottomRow = n - 1, leftCol = 0, rightCol = n - 1;
    int curr = 1;

    while (curr <= n * n) {
        // topRow -> leftCol to rightCol
        for (int j = leftCol; j <= rightCol && curr <= n * n; j++) {
            matrix[topRow][j] = curr++;
        }
        topRow++;

        // rightCol -> topRow to bottomRow
        for (int i = topRow; i <= bottomRow && curr <= n * n; i++) {
            matrix[i][rightCol] = curr++;
        }
        rightCol--;

        // bottomRow -> rightCol to leftCol
        for (int j = rightCol; j >= leftCol && curr <= n * n; j--) {
            matrix[bottomRow][j] = curr++;
        }
        bottomRow--;

        // leftCol -> bottomRow to topRow
        for (int i = bottomRow; i >= topRow && curr <= n * n; i--) {
            matrix[i][leftCol] = curr++;
        }
        leftCol++;
        }
        printMatrix(matrix);
    }

   static void printMatrix(int[][]matrix){
    for (int [] row : matrix){
        for(int val: row){
            System.out.print(val + " ");
            }
        System.out.println();
        }
   }

   public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter size of an Matrix: ");
        int n = sc.nextInt();
        
        System.out.println("Spiral Matrix: ");
        spiralMatrix(n);
   }
}
