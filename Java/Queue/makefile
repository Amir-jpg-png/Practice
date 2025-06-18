.PHONY: all clean

all: Node.class Queue.class Main.class

Node.class: Node.java
		javac Node.java

Queue.class: Queue.java Node.class
		javac Queue.java

Main.class: Main.java Queue.class Node.class
		javac Main.java

clean:
		rm -f *.class
