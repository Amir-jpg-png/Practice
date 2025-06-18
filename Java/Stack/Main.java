import java.util.Scanner;

public class Main {

    public static Scanner input = new Scanner(System.in);


    public static void main(String[] args) {
        boolean createNewStack;
        System.out.println("Create new Stack? (y/n)");
        System.out.print("Enter your choice: ");
        char newStack = input.next().charAt(0);

        if (newStack == 'y' || newStack == 'Y') {createNewStack = true;}
        else {createNewStack = false;}

        if(!createNewStack){
            System.out.println("No stack created. Terminate program!");
            return;
        }
        Stack stack = new Stack();



        int choice;
        String inputData;

        do{
            choice = choose();
            switch (choice) {
                case 1:
                    input.nextLine();
                    System.out.print("Enter data to push: ");
                    inputData = input.nextLine();
                    stack.push(inputData);
                    break;

                case 2:
                    try{
                        System.out.println("\"" + stack.pop() + "\"" + " was removed from stack");
                    }
                    catch (Exception e) {
                        System.out.println(e.getMessage());
                        return;
                    }
                    break;
                case 3:
                    stack.print();
                    break;
                case 0:
                    break;
            }
        }
        while (choice != 0);
    }
    public static int choose() {
        System.out.println("-----Menu-----");
        System.out.println("1. push.......");
        System.out.println("2. pop........");
        System.out.println("3. print......");
        System.out.println("0. exit.......");
        System.out.print("Enter your choice: ");
        int choice = input.nextInt();
        return choice;
    }
}