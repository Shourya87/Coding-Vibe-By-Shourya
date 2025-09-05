import java.util.Scanner;
import java.util.Arrays;

public class SortByTwoPointer {

    static void twoPointer(int[] arr) {
        int n = arr.length;
        int zeroes = 0;

        // Count number of Zeroes:
        for (int i = 0; i < n; i++) {
            if (arr[i] == 0) {
                zeroes++;
            }
        }

        // 0 to zeroes-1: 0, zeroes to n-1: 1
        for (int i = 0; i < n; i++) {
            if (i < zeroes) {
                arr[i] = 0;
            } else {
                arr[i] = 1;
            }
        }
        System.out.print(Arrays.toString(arr));

    }

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter size of an Array: ");
        int n = sc.nextInt();
        int arr[] = new int[n];

        System.out.println("Enter the 0's and 1's in Array: ");
        for (int i = 0; i < n; i++) {
            arr[i] = sc.nextInt();
        }

        System.out.println("Array after sorted: ");
        twoPointer(arr);
    }
}