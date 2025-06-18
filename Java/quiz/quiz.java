import java.util.Scanner;

public class quiz {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        String [] questions = {
                "What is the capital of France?",
                "What is the capital of Germany?",
                "What is the capital of Italy?",
                "What is the capital of Spain?",
                "What is the capital of Austria?",
        };
        String [][] options = {
                {"1. Paris", "2. Berlin", "3. Madrid", "4. Rome", "5. Vienna"},
                {"1. Paris", "2. Berlin", "3. Madrid", "4. Rome", "5. Vienna"},
                {"1. Paris", "2. Berlin", "3. Madrid", "4. Rome", "5. Vienna"},
                {"1. Paris", "2. Berlin", "3. Madrid", "4. Rome", "5. Vienna"},
                {"1. Paris", "2. Berlin", "3. Madrid", "4. Rome", "5. Vienna"}
        };

        int [] correctAnswers = {1, 2, 4, 3, 5};
        int choice;
        int score = 0;
        System.out.println("******************************");
        System.out.println("Welcome to the Java Quiz Game!");
        System.out.println("******************************");

        for (int i = 0; i < questions.length; i++) {
            System.out.println(questions[i]);
            for (int j = 0; j < options[i].length; j++) {
                System.out.println(options[i][j]);
            }

            System.out.print("Enter your choice: ");
            choice = sc.nextInt();

            if (choice == correctAnswers[i]) {
                System.out.println("**********");
                System.out.println(" CORRECT! ");
                System.out.println("**********");
                score++;
            }
            else {
                System.out.println("**********");
                System.out.println("  WRONG!  ");
                System.out.println("**********");
            }
        }
        System.out.println("******************************");
        System.out.println("You scored " + score + " out of " + questions.length + " questions!");
        System.out.println("******************************");

    }
}