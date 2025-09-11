
import java.util.Scanner;

public class SecondLargest {
    
    static int findMax (int[] arr){
        int mx = Integer.MIN_VALUE;
        for (int i = 0; i < arr.length; i++){
            if(arr[i] > mx){
                mx = arr[i];
            }
        }
        return mx;
    }
    
    static int findSecondMax(int[] arr){
        int smx = Integer.MIN_VALUE;
        int fmx = findMax(arr);
        for (int i = 0; i < arr.length; i++){
            if(arr[i] > smx && arr[i] < fmx){
                smx = arr[i];
            }
        }
        return smx;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter array size ");
        int n = sc.nextInt();
        int arr[] = new int[n];
        
        System.out.println("Enter " + n + " elements");
        for(int i = 0; i < n; i++){
            arr[i] = sc.nextInt();
        }
        System.out.println("First Max number is " + findMax(arr));
        System.out.println("Second Max number is " + findSecondMax(arr));
    }
}
