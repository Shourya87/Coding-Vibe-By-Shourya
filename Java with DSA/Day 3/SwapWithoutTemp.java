
public class SwapWithoutTemp {
    
    // Swap by doing Sum and Difference 
    static void swapWithoutTemp(int a,int b){
        System.out.println("Value before Swapping-");
        System.out.println("a: " + a + "\nb: " + b);

        a = a + b;
        b = a - b;
        a = a - b;

        System.out.println("Value after Swapping-");
        System.out.println("a: " + a + "\nb: " + b);

    }
    
    public static void main(String[] args) {
        int a = 9;
        int b = 3;
        swapWithoutTemp(a, b);
    }
}

