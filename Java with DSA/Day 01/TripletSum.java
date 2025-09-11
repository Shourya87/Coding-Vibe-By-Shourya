import java.util.Scanner;

public class TripletSum {

    static int tripletSum (int[] arr, int target){
        int n = arr.length;
        int ans = 0;

        //New variable added:
        int loopCount = 0;
        
        for(int i = 0; i < n; i++){
            for(int j = i + 1; j < n; j++){
                for(int k = j + 1; k < n; k++){
                    loopCount++; // Count every triplet chcked
                    if(arr[i] + arr[j] + arr[k] == target){
                          ans++;
                    }
                }
            }
        }
        //Print loop statistics:
        System.out.println("Total triplets checked: " + loopCount);
        return ans;
    }
    
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter array size ");
        int n = sc.nextInt();
        int []arr = new int[n];
        
        System.out.println("Enter " + n + " elements");
        for(int i = 0; i < n; i++){
            arr[i] = sc.nextInt();
        }

        System.out.print("Enter pair sum ");
        int target = sc.nextInt();

        System.out.println(tripletSum(arr, target));
    }
}
