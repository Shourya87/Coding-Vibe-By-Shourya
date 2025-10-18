public class Search2DMatrix {
    static boolean search2DMatrix(int[][] a, int target) {
        int n = a.length, m = a[0].length;
        int i = 0, j = m - 1;
        while (i < n && j >= 0) {
            if (a[i][j] == target)
                return true;

            if (target < a[i][j]) {
                j--; // move left
            } else {
                i++; // move down
            }
        }
        return false;
    }

    public static void main(String[] args) {
        int[][] a = {
                { 1, 2, 3 },
                { 4, 5, 6 },
                { 7, 8, 9 }
            };
        int target = 2;
        System.out.println(search2DMatrix(a, target));
    }
}
