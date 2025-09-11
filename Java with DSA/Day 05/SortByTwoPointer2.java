import java.util.Arrays;
import java.util.Scanner;

public class SortByTwoPointer2 {

    static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }

    static void sortZeroesAndOnes(int[] arr){
        int n = arr.length;
        int left = 0, right = n - 1;

        while(left < right){
            if (arr[left] == 1 && arr[right] == 0){
                swap(arr, left, right);
                left++;
                right--;
            }
            if(arr[left] == 0){
                left++;
            }
            if(arr[right] == 1){
                right--;
            }
        }
        System.out.println(Arrays.toString(arr));

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
        sortZeroesAndOnes(arr);
    }
}
