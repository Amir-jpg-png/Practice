.PHONY: all clean

all: Node.class Stack.class Main.class

Node.class: Node.java
		javac Node.java

Stack.class: Stack.java Node.class
		javac Stack.java

Main.class: Main.java Stack.class Node.class
		javac Main.java

clean:
		rm -f *.class
