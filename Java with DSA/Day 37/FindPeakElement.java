public class FindPeakElement {
    static int findPeakElement(int[] a){
        int n = a.length;
        int st = 0, end = n-1;
        while(st <= end){
            int mid = st + (end-st)/2;
            if((a[mid] > a[mid-1]) && (a[mid] > a[mid+1])){
                return mid;
            }
            if(a[mid] < a[mid+1]){
                //uphill/ascending
                st = mid+1;
            } else {
                end = mid - 1;
            }
        }
        return -1;
    }
    
    public static void main(String[] args) {
        int[] a = { 1, 2, 1, 3,7, 5, 6, 4};
        System.out.println(findPeakElement(a));
    }
}
