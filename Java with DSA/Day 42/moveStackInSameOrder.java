import java.util.Stack;
import java.util.Scanner;

public class moveStackInSameOrder {

    public static void main(String[] args) {
        Scanner sc  = new Scanner(System.in);
        Stack<Integer> st = new Stack<>();
        st.push(1);
        st.push(2);
        st.push(3); 
        st.push(4);
        st.push(5);
        System.out.println(st);

        //reverse order
        Stack<Integer> rt = new Stack<>();
        while(st.size() > 0){
            int x = st.peek();
            rt.push(x);
            st.pop();
        }

        Stack<Integer> gt = new Stack<>();
        while(rt.size() > 0){
            int x = rt.peek();
            gt.push(x);
            rt.pop();
        }
        System.out.println(gt);
    }
}