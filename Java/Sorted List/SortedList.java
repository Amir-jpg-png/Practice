public class SortedList {
    private Node root = null;

    public void add(int data) {
        if (root == null || data < root.getData()) {
            root = new Node(data, root);
        }
        else {
            Node tmp = root;
            while(tmp.getNext() != null && tmp.getNext().getData() < data) {
                tmp = tmp.getNext();
            }
            Node newNode = new Node(data, tmp.getNext());
            tmp.setNext(newNode);
        }
    }


    public void print(){
        Node current = root;
        System.out.println("*****Queue*****");
        while(current != null){
            System.out.println("  " + current.getData());
            current = current.getNext();
        }
        System.out.println("***************");
    }


}