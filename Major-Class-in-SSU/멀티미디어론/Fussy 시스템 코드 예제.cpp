#include <iostream>
#include <vector>

using namespace std;

int main(){
    double WA_bottom = 0;  // 스게노형의 크리스프 출력 분모 값
    double WA_top = 0;     // 스게노형의 크리스프 출력 분자 값
    double WA = 0;      // 스게노형의 크리스프 출력 값(가중 평균)
    
    cout << "[ 크리스프 입력 ] \n";
    cout << "현재 프로젝트 자금상태는 35%입니다. \n";     // 크리스프 입력 값 x
    cout << "현재 프로젝트 인력상태를 60%입니다. \n";     // 크리스프 입력 값 y
    
    // 1단계 퍼지화
    double A1 = 0.5, A2 = 0.2, A3 = 0.0, B1 = 0.1, B2 = 0.7;
    
    vector<double> x = { 0.5, 0.2, 0 };   // 크리스프 입력값 x와 A1, A2, A3가 만나는 지점의 값을 담은 vector 배열
    vector<double> y = { 0.1, 0.7 };        // 크리스프 입력값 y와 B1, B2가 만나는 지점의 값을 담은 vector 배열
    vector<pair<double, int>> z;            // double에는 z값, int에는 규칙의 번호를 pair로 저장
    
    cout << "\n[ 퍼지화 ] \n";
    
    for(int i=0; i<x.size(); i++)
        cout <<"x = A" << i+1 << "(" << x[i] << ")  ";
    cout << "\n";
    
    for(int i=0; i<y.size(); i++)
        cout <<"y = B" << i+1 << "(" << x[i] << ")  ";
    cout << "\n\n[ 규칙 평가 ]\n";
    
    // 2단계 규칙평가
    const unsigned long maxRule1 = max(x.size(), y.size());
    
    for(int i=0; i<maxRule1; i++){
        if(x[i] == A3 || y[i] == B1){
            z.push_back(make_pair(max(A3, B1), 20));
            
            cout << "규칙1, z = k1("<< max(A3, B1) <<")\n";
            break;
        }
    }
    
    for(int i=0; i<x.size(); i++){
        bool ruleOkay = false;
        
        for(int j=0; j<y.size(); j++){
            if(x[i] == A2 && y[j] == B2){
                z.push_back(make_pair(min(A2, B2), 50));
                ruleOkay = true;
                
                cout << "규칙2, z = k2("<< min(A2, B2) <<")\n";
                break;
            }
        }
        if(ruleOkay) break;
    }
    
    for(double tmp : x)
        if(tmp == A1){
            z.push_back(make_pair(A1, 80));
            
            cout << "규칙3, z = k3("<< A1 <<")\n";
            break;
        }
    
    // 3단계 규칙 후건의 통합 및 역퍼지화
    for(int i=0; i<z.size(); i++) WA_bottom += z[i].first;              // 가중 평균(WA) 분모
    for(int i=0; i<z.size(); i++) WA_top += z[i].second * z[i].first;   // 가중 평균(WA) 분자

    WA = WA_top/WA_bottom;
    
    cout << "\n[ 규칙 후건의 통합 및 역퍼지화 ]\n" << "가중 평균식 분자 = "<< WA_top << "\n가중 평균식 분모 = " << WA_bottom <<"\n가중 평균 = "<<WA;
    cout << "\n\n[ 크리스프 출력 ]\n프로젝트 위험성 : " << WA <<"%\n"<<endl;
    
    return 0;
}
