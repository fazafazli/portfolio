#include <bits\stdc++.h>
using namespace std;

int main() {
    int a, b, c;
    int x1;
    int x2;
    int ax**2 + bx + c = 0;

    cin >> a >> b >> c;
    x1 = (-b + sqrt(b * b - 4 * a * c)) / (2 * a);
    x2 = (-b - sqrt(b * b - 4 * a * c)) / (2 * a);
    cout << x1 << " " << x2 << endl;

    cout << a*x1**2 + b*x1 + c << endl;
    cout << a*x2**2 + b*x2 + c << endl;

    if (a*x1**2 + b*x1 + c == 0) {
        cout << "1" << endl;
    } else {
        cout << "0" << endl;
    }

    if (a*x2**2 + b*x2 + c == 0) {
        cout << "1" << endl;
    } else {
        cout << "0" << endl;
    }
}