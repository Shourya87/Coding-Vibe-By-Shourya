public class doublell {
    
    public static class Node{
        int val;
        Node next;
        Node prev;
        Node(int val){
            this.val = val;
        }
    }
    public static void display(Node prev){
        Node temp = prev;
        while(temp != null){
            System.out.print(temp.val + " ");
            temp = temp.prev;
        }
    }
    public static void main(String[] args){
        // 4 10 2 99 13
        Node a = new Node(4);
        Node b = new Node(10);
        Node c = new Node(2);
        Node d = new Node(99);
        Node e = new Node(13);
        // a.prev = null (By default)
        a.next = b;
        b.prev = a;
        b.next = c;
        c.prev = b;
        c.next = d;
        d.prev = c;
        d.next = e;
        e.prev = d;

        display(e);
    }
}
