#include<iostream>
using namespace std;
int main()
{
    int n;
    cin >> n;
    int x = 0, y = 0,num=1;
    int len = n - 1;
    int mx[100][100];
    while(x<len&&y<len)
    {
        int y_ = y;
        int x_ = x;
        for (x_ = x; x_ < len;x_++)
        {
            mx[x_][y_] = num++;
        };
        for (y_ = y; y_ < len;y_++)
        {
            mx[x_][y_] = num++;
        }
        for (; x_ > 0;x_--){
            mx[x_][y_] = num++;
        }
        for (; y_ > 0;y_--){
            mx[x_][y_] = num++;
        }
        x += 1;
        y += 1;
    }
    for (int i = 0; i < n;i++)
    {
        for (int j = 0; j < n;j++)
        {
            cout << mx[i][j] << ' ';
        }
        cout << endl;
    }
}