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