import java.util.Arrays;

public class BubbleSort {

    static void bubbleSort(int[] a) {
        int n = a.length;
        int[] asorted = Arrays.copyOf(a, n);
        Arrays.sort(asorted);

        // n-1 iteration/passes
        for (int i = 0; i < n - 1; i++) {

            if (!Arrays.equals(asorted, a)) {
                for (int j = 0; j < n - i - 1; j++) {
                    // last i elements are already at current sorted positions,
                    // so no need to check them

                    if (a[j] > a[j + 1]) {
                        // swap - a[j] , a[j+1]

                        int temp = a[j];
                        a[j] = a[j + 1];
                        a[j + 1] = temp;
                    }
                }
            } else {
                break;
            }
        }
    }

    public static void main(String[] args) {
        int[] a = { 4, 3, 5, 6, 7 };
        bubbleSort(a);
        for (int i : a) {
            System.out.print(i + " ");
        }
    }

}
