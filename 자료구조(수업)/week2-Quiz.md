# week2-Quiz
> 개인적으로 생각해 본 정답이기 때문에 오답이거나 다른 해답이 있을 수 있습니다. <br/>

<br/>

## Q2.
### 2장_2 PPT 18-22페이지에 있는 다항식 클래스 Polynomial를 c++로 구현하세요
```
#include <cstdio>
#include <iostream>

using namespace std;

#define MAX_DEGREE 80

class Polynominal{
    int degree;
    float coef[MAX_DEGREE];
    
public:
    Polynominal(){
        degree = 0;
    }
    
    void read(){
        printf("다항식의 최고 차수를 입력하시오 : ");
        scanf("%d", &degree);
        printf("각 항의 계수를 입력하시오 (총 %d개) : ", degree+1);
        for(int i=0; i<degree+1; i++){
            scanf("%f", coef + i);
        }
        printf("\n");
    }
    
    void display(const char *str = "Poly ="){
        printf("\t%s", str);
        for(int i=0; i<degree; i++){
            if( coef[i] >= 0){
                printf("%5.1f x^%d + ", coef[i], degree-i);
            }
            else{
                printf("( %5.1f x^%d ) + ", coef[i], degree-i);
            }
        }
        if( coef[degree] >= 0){
            printf("%4.1f\n", coef[degree]);
        }
        else{
            printf("( %4.1f )\n", coef[degree]);
        }
    }
    
    void add(Polynominal a, Polynominal b){
        if(a.degree > b.degree){
            *this = a;
            for(int i=0; i<=b.degree; i++){
                coef[i+(degree - b.degree)] += b.coef[i];
            }
        }
        else{
            *this = b;
            for(int i=0; i<=a.degree; i++){
                coef[i+(degree - a.degree)] += a.coef[i];
            }
        }
    }
    
    bool isZero(){
        return degree == 0;
        
    }
    
    void negate(){
        for(float &polArr : coef){
            if(polArr){
                polArr = -polArr;
            }
        }
    }
};

int main(){
    
    Polynominal a, b, c;
    
    a.read();
    b.read();
    
    a.display("a = ");
    b.display("b = ");
    
    c.add(a, b);
    c.display("a+b = ");
    
    c.negate();
    c.display("-(a+b) = ");

    
    return 0;
}

```

<br/>
<br/>

## C2.
### 2장_2 PPT 23페이지에 있는 희소다항식 클래스를 설계하여 read, display, add함수를 포함하도록 구현하라.
