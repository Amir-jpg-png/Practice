import java.util.Scanner;

public class Main {

    public static Scanner input = new Scanner(System.in);


    public static void main(String[] args) {
        boolean createNewList;
        System.out.println("Create Sorted List? (y/n)");
        System.out.print("Enter your choice: ");
        char newList = input.next().charAt(0);

        if (newList == 'y' || newList == 'Y') {createNewList = true;}
        else {createNewList = false;}

        if(!createNewList){
            System.out.println("List not created. Terminate program!");
            return;
        }
        SortedList list = new SortedList();



        int choice;
        int inputData;

        do{
            choice = choose();
            switch (choice) {
                case 1:
                    input.nextLine();
                    System.out.print("Enter data to add: ");
                    inputData = input.nextInt();
                    list.add(inputData);
                    break;

                case 2:
//                    try{
//                        System.out.println("\"" + queue.get() + "\"" + " was removed from queue");
//                    }
//                    catch (Exception e) {
//                        System.out.println(e.getMessage());
//                        return;
//                    }
                    System.out.println("\nMethod get not implemented yet!\n");
                    break;
                case 3:
                    list.print();
                    break;
                case 0:
                    break;
            }
        }
        while (choice != 0);
    }
    public static int choose() {
        System.out.println("-----Menu-----");
        System.out.println("1. add........");
        System.out.println("2. get........");
        System.out.println("3. print......");
        System.out.println("0. exit.......");
        System.out.print("Enter your choice: ");
        int choice = input.nextInt();
        return choice;
    }
}
