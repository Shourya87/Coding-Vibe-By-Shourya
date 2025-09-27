public class Recursion_PrintAllTarget {

    static void findAllIndices(int[] a, int n, int target, int idx){
        
        // base case
        if(idx >= n){
            return;
        }

        // self work
        if(a[idx] == target){
            System.out.println(idx);
        }

        //recursive work
        findAllIndices(a, n, target, idx+1);
    }

    public static void main(String[] args) {
        int [] a = {1, 3, 2, 3, 4, 5, 6, 3};
        int target = 3;
        int n = a.length;
        findAllIndices(a, n, target, 0);
    }
}