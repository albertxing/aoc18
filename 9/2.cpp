#include <iostream>
#include <map>
#include <list>
#include <algorithm>

std::list<long>::iterator advance(std::list<long> &list, std::list<long>::iterator it, int n) {
	if (it == list.end()) it = list.begin();
	for (; n > 0; --n) {
		it++;
		if (it == list.end()) it = list.begin();
	}
	return it;
}

std::list<long>::iterator retreat(std::list<long> &list, std::list<long>::iterator it, int n) {
	for (; n > 0; --n) {
		if (it == list.begin()) it = list.end();
		it--;
	}
	return it;
}

int main() {
	long players = 403;
	long num_marbles = 7192000;

	long current_player = 0;
	std::map<long, long> scores;

	std::list<long> marbles;
	marbles.push_back(0);

	std::list<long>::iterator current = marbles.begin();

	for (long m = 1; m <= num_marbles; ++m, current_player = (current_player + 1) % players) {
		if (m % 23 == 0) {
			scores[current_player] += m;
			current = retreat(marbles, current, 7);

			scores[current_player] += *current;

			current = marbles.erase(current);
			if (current == marbles.end()) current = marbles.begin();
		} else {
			current = advance(marbles, current, 1);
			current = marbles.emplace(++current, m);
		}

		// for (auto p = marbles.begin(); p != marbles.end(); p++) {
		// 	std::cout << (p == current ? " (" : " ") << *p << (p == current ? ")" : "");
		// }
		// std::cout << std::endl;
	}

	long max = 0;

	for (auto p = scores.begin(); p != scores.end(); p++) {
		if (p->second > max) max = p->second;
	}

	std::cout << max << std::endl;
}