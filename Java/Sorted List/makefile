.PHONY: all clean

all: Node.class SortedList.class Main.class

Node.class: Node.java
		javac Node.java

SortedList.class: SortedList.java Node.class
		javac SortedList.java

Main.class: Main.java SortedList.class Node.class
		javac Main.java

clean:
		rm -f *.class
