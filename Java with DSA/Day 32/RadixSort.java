public class RadixSort {

    static void display(int[] arr) {
        for (int val : arr) {
            System.out.print(val + " ");
        }
    }

    static int findMax(int[] arr) {
        int mx = Integer.MIN_VALUE;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > mx) {
                mx = arr[i];
            }
        }
        return mx;
    }

    static void countSort(int[] arr, int place) {
        int max = findMax(arr); // Find the largest element of the arr
        int[] count = new int[max + 1];
        for (int i = 0; i < arr.length; i++) {
            count[arr[i]]++;
        }
        int k = 0;
        for (int i = 0; i < count.length; i++) { // 0 2 0 3 1 2
            for (int j = 0; j < count[i]; j++) {
                arr[k++] = i;
            }
        }
    }

    static void radixSort(int[] arr) {
        int max = findMax(arr); // get maximum element
        // apply counting sort to sort elements based on place value
        for (int place = 1; max / place > 0; place *= 10) {
            countSort(arr, place);
        }
    }

    public static void main(String[] args) {
        int[] arr = {43, 453, 626, 983, 0, 3};
        radixSort(arr);
        display(arr);
    }
}
