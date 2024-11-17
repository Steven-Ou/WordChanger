#include <iostream>
#include <cstdlib>
#include <ctime>
#include <string>
using namespace std;

string colors[8] = 
{
    "\033[31m", // red
    "\033[33m", // yellow
    "\033[32m", // green
    "\033[36m", // cyan
    "\033[34m", // blue
    "\033[35m", // purple
    "\033[30m", // black
    "\033[37m" // white
};

void printMessage(string str)
{
    srand(time(0));
    int r = rand()%8;
    for (int i = 0; i < str.size(); i++)
    {
        for (int j = 0; j < 10000; j++)
        {
            for (char c = '!'; c < '~'; c++)
            {
                cout << c << char(8);
            }
        }
        cout << colors[(r+i)%8] << str[i];
    }
    cout << endl;
}

int main()
{
    string message;
    cout << "Enter a message: ";
    getline(cin, message);
    printMessage(message);
    return 0;
}