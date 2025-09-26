public class Recursion_ArrayValues {

    static void printArray(int []arr, int idx){

        // base case
        if(idx == arr.length){
            return;
        }

        // self work
        System.out.print(arr[idx] + " ");

        // Recursive work - sub problem
        printArray(arr, idx+1);
    }

    public static void main (String[] args){
        int [] arr = {5,6,4,3,2};
        printArray(arr, 0);
    }
}