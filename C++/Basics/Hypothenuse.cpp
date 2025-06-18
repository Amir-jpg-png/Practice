#include <iostream>
#include <cmath>

int main() {
	double a, b;

	std::cout << "Enter the value for a: ";
	std::cin >> a;
	std::cout << "Enter the value for b: ";
	std::cin >> b;

	double c = sqrt(pow(a, 2) + pow(b, 2));
	std::cout << c;
}