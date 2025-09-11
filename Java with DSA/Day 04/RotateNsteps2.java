import java.util.Arrays;
import java.util.Scanner;

public class RotateNsteps2 {

    static void rotateNsteps(int[] arr, int k) {
        int n = arr.length;
        if (n == 0) return;

        k = k % n; 
        
        reverse(arr, 0, n - 1);
        reverse(arr, 0, k - 1);
        reverse(arr, k, n - 1);

        System.out.println(Arrays.toString(arr));
    }

    private static void reverse(int[] a, int l, int r) {
        while (l < r) {
            int tmp = a[l];
            a[l] = a[r];
            a[r] = tmp;
            l++; r--;
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter size of Array: ");
        int n = sc.nextInt();

        int[] arr = new int[n];
        System.out.println("Enter the values in Array:");
        for (int i = 0; i < n; i++) {   // <-- strictly < n
            arr[i] = sc.nextInt();
        }

        System.out.print("Enter the rotation time: ");
        int k = sc.nextInt();

        rotateNsteps(arr, k);
        sc.close();
    }
}
