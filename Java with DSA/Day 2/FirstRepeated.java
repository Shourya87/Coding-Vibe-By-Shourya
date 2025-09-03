
import java.util.Scanner;

public class FirstRepeated {
    static int firstRepeated(int arr[]){
        int n = arr.length;

        for (int i = 0; i < n; i++){
            for (int j = i + 1; j < n; j++){
                if (arr[i] == arr[j]){
                    return arr[i];
                }
            }
        }
        return -1;
    }    

    public static void main(String [] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter size of Array: ");
        int n = sc.nextInt();
        int arr[] = new int[n];

        System.out.println("Enter " + n + " of elements");
        for (int i = 0; i < n; i++){
            arr[i] = sc.nextInt();
        }
        System.out.println("First Repeated elements are: " + firstRepeated(arr));
    }
}
