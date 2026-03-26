import java.util.Stack;
import java.util.Scanner;

public class moveStackInSameOrder {

    public static void main(String[] args) {
        Scanner sc  = new Scanner(System.in);
        Stack<Integer> st = new Stack<>();
        int n;
        System.out.println("Enter the number elements you want to insert");
        for(int i=1; i<=n; i++){
            int x = sc.nextInt();
            st.push(x);
        }
        System.out.println(st);

        Stack<Integer> rt = new Stack<>();
        
        }
    }
}