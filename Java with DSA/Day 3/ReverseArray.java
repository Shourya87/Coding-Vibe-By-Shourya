import java.util.Arrays;
import java.util.Scanner;

public class ReverseArray {
    
    static int[] reverseArray(int[] arr){
        int n = arr.length;
        int [] ans = new int[n];
        int j = 0;

        //Traverse original array in reverse direction 
        for (int i = n-1; i >= 0; i--){
            ans[j++] = arr[i];
        }
        return ans;
    }

    public static void main(String [] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter array size ");
        int n = sc.nextInt();
        int arr[] = new int[n];
        
        System.out.println("Enter " + n + " elements");
        for(int i = 0; i < n; i++){
            arr[i] = sc.nextInt();
        }
        System.out.println(Arrays.toString(arr));
        System.out.println(Arrays.toString(reverseArray(arr)));
    }
}
