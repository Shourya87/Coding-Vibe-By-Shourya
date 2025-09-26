public class Recursion_MaxArray {
    static int maxArray(int [] arr, int idx){

        //base case
        if(idx == arr.length-1){
            return arr[idx];
        }

        // small problem -> idx + 1, end of the array -> max -> recursion
        int smallAns = maxArray(arr, idx+1);

        // self work and final ans
        return Math.max(arr[idx], smallAns);
    }

    public static void main(String[] args) {
        int arr[] = {5,6,7,3,1,2};
        System.out.println(maxArray(arr, 0));
    }
}
