import java.util.Scanner;
import java.util.Arrays;

public class PrefixSum {
    
    static int[] makePrefixSumArray(int[] arr){
        int n = arr.length;
        int [] pref = new int[n];
        pref[0] = arr[0];

        for (int i = 1; i < n; i++){
            pref[i] = pref[i-1] + arr[i];
        }
        return pref;
    }

    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter array size ");
        int n = sc.nextInt();
        int []arr = new int[n];

        System.out.println("Enter " + n + " elements");
        for (int i = 0; i < n; i++){
            arr[i] = sc.nextInt();
        }
        System.out.println("Input Array");
        System.out.println(Arrays.toString(arr));

        int[] pref = makePrefixSumArray(arr);
        System.out.println(Arrays.toString(pref));
    }
}
