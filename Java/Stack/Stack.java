public class Stack {
    private Node top = null;

    public void push(String data) {
        Node newNode = new Node(data, top);
        top = newNode;
    }

    public String pop(){
        if(top == null){throw new NullPointerException("****error: stack is empty!");}
        String data = top.getData();
        top = top.getNext();
        return data;
    }

    public void print(){
        Node current = top;
        System.out.println("*****Stack*****");
        while(current != null){
            System.out.println("  " + current.getData());
            current = current.getNext();
        }
        System.out.println("***************");
    }


}