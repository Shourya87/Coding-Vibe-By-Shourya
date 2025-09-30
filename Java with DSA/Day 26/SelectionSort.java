public class SelectionSort {

    static void selectionSort(int[] a) {
        int n = a.length;

        for (int i = 0; i < n - 1; i++) { // i represents the current index

            // Find the minimun element in unsorted part of the array
            int min_index = i;
            for (int j = i + 1; j < n; j++) {
                if (a[j] < a[min_index]) {
                    min_index = j;
                }
         }

            // Swap the found minimum element with the current element
            int temp = a[i];
            a[i] = a[min_index];
            a[min_index] = temp;
        }
    }

    public static void main(String[] args) {
        int[] a = { 7, 4, 5, 1, 2 };
        selectionSort(a);
        for (int i = 0; i < a.length; i++) {
            System.out.print(a[i] + " ");
        }
    }
}
