import java.util.Arrays;
import java.util.Scanner;

public class RotateNsteps {
        static void rotateNsteps(int[] arr, int k) {
        int n = arr.length;
        int a = k % n;
        int ans[] = new int [n];

        if(a == 0){
            System.out.println(arr);
        }
        else{
            for(int i = a-1, j = n-1; i>=0; i--,j--){
                ans[i] = arr[j];
            }
            for (int i = a, d = 0; i < n; i++, d++){
                ans[i] = arr[d];
            }
        }
        System.out.println(Arrays.toString(ans));
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
