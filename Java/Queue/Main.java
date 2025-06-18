import java.util.Scanner;

public class Main {

    public static Scanner input = new Scanner(System.in);


    public static void main(String[] args) {
        boolean createNewQueue;
        System.out.println("Create new Queue? (y/n)");
        System.out.print("Enter your choice: ");
        char newQueue = input.next().charAt(0);

        if (newQueue == 'y' || newQueue == 'Y') {createNewQueue = true;}
        else {createNewQueue = false;}

        if(!createNewQueue){
            System.out.println("No queue created. Terminate program!");
            return;
        }
        Queue queue = new Queue();



        int choice;
        String inputData;

        do{
            choice = choose();
            switch (choice) {
                case 1:
                    input.nextLine();
                    System.out.print("Enter data to put: ");
                    inputData = input.nextLine();
                    queue.put(inputData);
                    break;

                case 2:
                    try{
                        System.out.println("\"" + queue.get() + "\"" + " was removed from queue");
                    }
                    catch (Exception e) {
                        System.out.println(e.getMessage());
                        return;
                    }
                    break;
                case 3:
                    queue.print();
                    break;
                case 0:
                    break;
            }
        }
        while (choice != 0);
    }
    public static int choose() {
        System.out.println("-----Menu-----");
        System.out.println("1. put........");
        System.out.println("2. get........");
        System.out.println("3. print......");
        System.out.println("0. exit.......");
        System.out.print("Enter your choice: ");
        int choice = input.nextInt();
        return choice;
    }
}
