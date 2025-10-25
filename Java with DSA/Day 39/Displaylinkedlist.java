public class Displaylinkedlist {

    public static void  display(Node head){
        Node temp = head;
        while(temp!=null){
            System.out.print(temp.data + " ");
            temp = temp.next;
        }
    }

    public static class Node {
        int data; // value
        Node next; // Address of next node

        Node(int data) {
            this.data = data;
        }
    }

    public static void main(String[] args) {
        Node a = new Node(5);
        Node b = new Node(3);
        Node c = new Node(6);
        Node d = new Node(9);
        Node e = new Node(16);

        // 5 -> 3 -> 6 -> 9 -> 16
        a.next = b;
        b.next = c;
        c.next = d;
        d.next = e;

        // System.out.println(a.next);
        // System.out.println(b.next);
        // System.out.println(c.next);
        // System.out.println(d.next);
        // System.out.println(e.next);

        display(a);
    }

}
