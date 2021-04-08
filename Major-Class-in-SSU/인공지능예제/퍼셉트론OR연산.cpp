#include <iostream>
#include <vector>

using namespace std;

int inputX[4][2] = {{0, 0}, {0, 1}, {1, 0}, {1, 1}};
int goalY[4] = {0, 0, 0, 1};
float THETA = 0.2;
float ALPHA = 0.1;

void modifyWeight(vector<pair<float,float>> &weight, vector<int> &e, int cnt){
    double nextWeight_1 = weight[cnt].first + (ALPHA * inputX[cnt%4][0] * e[cnt+1]);
    double nextWeight_2 = weight[cnt].second + (ALPHA * inputX[cnt%4][1] * e[cnt+1]);
    
    weight.push_back(make_pair(nextWeight_1, nextWeight_2));
}

int realOutput(vector<pair<float,float>> &weight, int cnt){
    float tmp = (inputX[cnt%4][0] * weight[cnt].first) + (inputX[cnt%4][1] * weight[cnt].second);
    if((tmp - THETA) >= 0) return 1;
    else return 0;
}

int calcOutput(vector<int> &e, int output1, int output2){
    int sub = output1-output2;
    e.push_back(sub);
    return sub;
}

int main(){
    vector<pair<float,float>> weight = {{0.3, -0.1}, };
    vector<int> e={0, };
    int epoc;
    int k = 0, cnt = 0;
    
    cout << "원하는 만큼의 에폭 값을 입력해 주세요 : ";
    cin >> epoc;

    for(int i=0; i<epoc; i++){
        cout << "----------[에폭 " << cnt+1 << "]-----------\n";
        
        for(int j=0; j<4; j++){
            cout << "입력[" << inputX[k%4][0] << ", " << inputX[k%4][1] << "] | 목표 출력[" << goalY[k%4];
            cout << "] | 초기 가중치[" << weight[k].first << ", " << weight[k].second;
            cout << "] | 실제 출력[" << realOutput(weight, k);
            cout << "] | 오차[" << calcOutput(e, goalY[k%4], realOutput(weight, k));
            
            modifyWeight(weight, e, k);
            cout << "] | 최종 가중치[" << weight[k+1].first <<", "<< weight[k+1].second <<"]\n";
            k++;
        }
        cnt ++;
        cout << "\n";
    }
    
    weight.clear();
    e.clear();
    
    return 0;
}
