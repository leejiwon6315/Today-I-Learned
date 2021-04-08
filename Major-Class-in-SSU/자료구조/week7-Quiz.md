# week7-Quiz
> 개인적으로 생각해 본 정답이기 때문에 오답이거나 다른 해답이 있을 수 있습니다. <br/>

<br/>

## Q7.
### 1. 다음의 순환 호출 함수에서 잘못된 점은 무엇인가? 
```
int recursive(int n){
  if(n==1) return 0;
  return n*recursive(n);
}
```
> 순환할 때 n의 크기가 줄지 않아 종료되지 않음

<br/>

### 2. 다음의 순환 호출 함수에서 잘못된 점은 무엇인가? 
```
int recursive(int n){
  printf("recursive(%d)\n", n);
  return n*recursive(n-1);
}
```
> 종료조건이 명시되어 있지 않음

<br/>

### 3. 다음 함수를 sum(5)로 호출하였을 때, 화면에 출력되는 내용과 함수의 반환 값을 구하라.
```
int sum(int n){
  printf("%d\n", n);
  if(n<1) return 0;
  else return(n+ sum(n-1));
}
```
> 반환 값 : 15<br/>
> 5, 4, 3, 2, 1 의 합

<br/>

### 4. 다음 함수에서 asterisk(5)를 호출할 때 출력되는 *의 개수는?

```
void asterisk(int i){
  if(i>1){
    asterisk(i/2);
    asterisk(i/2);
  }
  printf("*");
}
```
> 7개<br/>
> n=5일 때 3, n=2일 때 3, n=1일 때 1 

<br/>

### 5. 다음을 계산하는 순환적인 프로그램을 작성하라.
`1+2+3+ ... +n`

```
int sum(int n){
  if(n <= 1) return 1;
  
  else return (n + sum(n - 1));
}
```

<br/>

### 6. 다음을 계산하는 순환적인 프로그램을 작성하라.
`1+1/2+1/3+ ... +1/n`

```
double sum(int n){
  if(n <= 1) return 1.0;
  
  else return (1.0/n + sum(n - 1));
}
```


<br/>

## C7
### C7_1. 순환적인 방법으로 피보나치 수열을 호출하였을 때 함숙 중복되어 호출되는 것을 확인할 수 있도록 각 함수의 매개변수 별 호출 빈도를 출력하라
```
#include <iostream>

using namespace std;

int arr[11] = {0, };

int fib(int n){
    arr[n]++;
    
    if(n<=1) return n;
    return (fib(n-1) + fib(n-2));
}

void printFib(){
    for(int i=10; i>0; i--){
        cout << "Fibo(" << i << ") = " << arr[i] << "번" << "\n";
    }
}

int main(){
    
    fib(10);
    printFib();
    
    return 0;
}
```

### C7_2. 문자열의 내용을 반대로 바꾸는 순환적인 함수 reverse()를 구현하라. 예를 들어 reverse("ABCDE")는 "EDCBA"를 반환해야 한다.
  
```
#include <iostream>
#include <string>

using namespace std;
string result = "";

void reverse(string str=""){
    if(!str.size()) return;
    result += str[str.size()-1];
    str.erase(str.size()-1);
    reverse(str);
}

int main(){
    
    reverse("ABCDE");
    cout << result;
    result = "";
    return 0;
}
```
