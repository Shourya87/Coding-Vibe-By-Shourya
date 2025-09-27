import java.util.Scanner;

public class Recursion_RemoveA {
    // Remove Occurence of a 
    static String removeA(String s, int idx){

        // Base Case
        if(idx == s.length()) return "";

        // Recursive work
        String ans = removeA(s, idx+1);
        char currChar = s.charAt(idx);

        // Self work
        if(currChar != 'a'){
            return currChar + ans;
        } else {
            return ans;
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String s = sc.nextLine();
        System.out.println(removeA(s, 0));
    }
}