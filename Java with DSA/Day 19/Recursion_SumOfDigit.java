public class Recursion_SumOfDigit{

    static int sod(int n){
        
        //base case
        if(n >= 0 && n <= 9){
            return n;
        }

        //recursive work -> small ans
        return sod(n/10) + n%10;
    }

    public static void main(String[] args) {
        System.out.println(sod(123456));
    }
}