public class Queue {
    private Node begin = null;
    private Node end = null;

    public void put(String data) {
        Node newNode = new Node(data, null);

        if(begin == null){
            begin = newNode;
            end = newNode;
        }
        else {end.setNext(newNode);}

        end = newNode;
    }

    public String get(){
        if(begin == null){throw new NullPointerException("****error: queue is empty!");}
        String data = begin.getData();
        begin = begin.getNext();
        if(begin == null){end = null;}
        return data;
    }

    public void print(){
        Node current = begin;
        System.out.println("*****Queue*****");
        while(current != null){
            System.out.println("  " + current.getData());
            current = current.getNext();
        }
        System.out.println("***************");
    }


}