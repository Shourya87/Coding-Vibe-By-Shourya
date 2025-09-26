import java.util.Scanner;

public class Recursion_kMultiplesOfN{

    static void printMultiples(int n, int k){

        //base case 
        if(k == 0) return;

        //recursion case
        printMultiples(n, k-1);

        //self work
        System.out.println(n*k);

    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number: ");
        int n = sc.nextInt();
        System.out.println("Enter the value of Kth multiples of N: ");
        int k = sc.nextInt();
        printMultiples(n, k);
    }
}