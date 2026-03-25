import java.util.Stack;

public class BasicStack {

    public static void main(String[] args) {
        //int[] arr = new int[5];
        Stack<Integer> st = new Stack<>();
        st.push(1);
        st.push(23);
        st.push(90);
        st.push(5);

        //peek
        System.out.println(st.peek());
        System.out.println(st);
    }
}