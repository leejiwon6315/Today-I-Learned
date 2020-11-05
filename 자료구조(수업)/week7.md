# Week7
> 순환

## [ 온라인 강의 내용 ]
### 순환
> 일반적으로 '재귀'라 불리는 문제 해결방법을 '순환'이라고 표현한 것 같다<br/>

알고리즘이나 함수가 수행 도중에 자기 자신을 닷 호출하여 문제를 해결하는 기법.<br/>
정의 자체가 순환적으로 되어 있는 경우에 적합한 방법

#### 순환의 이해
+ 팩토리얼 값
+ 피보나치 수열
+ 이항계수
+ 하노이 탑
+ 이진탐색
+ 영역채색

#### 다중 순환
한 번의 호출이 발생할 때마다 두 개 이상의 순환호출이 이루어지는 경우
+ 선형 순환 : 팩토리얼, 거듭 제곱
+ 이진 순환 : 피보나치, 하노이 탑

<br/>

### 팩토리얼
#### 팩토리얼의 정의
아래 정의에서 n이 0뿐만 아니라 1일때도 n!은 1이지만,<br/>
두번째 식(n>=1)에 대입하면 올바른 값이 나오므로 n이 0일 때만 따로 정의를 해줌
```
n! = n=0, 1;
     n>=1, n*(n-1)!;
```

#### 팩토리얼 구현(순환)
```
int factorial(int n){
  if(n <= 1) return 1;
  
  elsw return (n*factorial(n-1));
}
```

#### 팩토리얼 구현(반복)
```
int factorial(int n){
  int result = 1;
  
  for(int i=n; n>0; i--){
    result *= i;  
  }
  
  return result;
}
```

<br/>

### 분할 정복(Divide and Conquer)
큰 문제를 여러개의 작은 문제로 나누어, 작은 문제부터 해결해 나가는 방법<br/>

#### 거듭제곱 값의 계산
순환적인 방법이 반복적인 방법보다 더 효율적인 예

#### 거듭제곱 값 계산 구현(반복)
시간 복잡도 : O(n)
```
double pow(double x, double n){
  double r = 1.0;
  
  for(int i=0; i<n; i++){
    r *= x;
  }
  
  return r;
}
```

#### 거듭제곱 값 계산 구현(순환)
시간 복잡도 : O(logn)
```
double pow(double x, double n){
  if(n==0) return 1;
  
  else if((n%2)==0) return pow(x*x, n/2);
  
  else return x*pow(x*x, (n-1)/2)
}
```

### 피보나치 수열
순환 호출의 비효율적인 예
> 이전에 계산 했던 것을 중복하 계산함

#### 피보나치 수열 구현(순환)
```
int fib(int n){
     if(n==0) return 0;
     
     if(n==1) return 1;
     
     return (fib(n-1) + fib(n-2));
}
```

#### 피보나치 수열 구현(반복)
```
int fib(int n){
     if(n<2) return n;
     
     int tmp, current = 1, last = 0;
     
     for(int i=2; i<=n; i++){
          tmp = current;
          current += last;
          last = tmp;
     }
     
     return current
}
```
<br/>

### 하노이 탑
3개의 막대 중 첫번째에 크기 순(작은 원판이 위)으로 원판들이 쌓여있음<br/>
이 원판 n개를 다른 막대로 옮기는 문제
+ 한 번에 하나의 원판만 이동할 수 있음 
+ 맨 위에 있는 원판만 이동할 수 있음
+ 크기가 작은 원판 위에 큰 원판이 쌓일 수 없음 
+ 중간의 막대를 이용할 수 있으나 앞의 조건들을 지켜야 함 

#### 하노이 탑 구현
```
void hanoi(int n, char from, char tmp, char to)
     if( n==1 ) printf("원판 1을 %c에서 %c으로 옮긴다.\n",from,to);
     else {
          hanoi(n-1, from, to, tmp);
          printf("원판 %d을 %c에서 %c으로 옮긴다.\n",n, from, to);
          hanoi(n-1, tmp, from, to);
     }
}

void main(){
     hanoi(4, 'A', 'B', 'C');
}
```
<br/>

### 영역 채색
이진 영상엣 연결된 객체들을 고유한 색으로 칠하기

#### 영역 채색 구현
> image가 아닌 int 형식으로 구현함 
```
#include <iostream>
#include <string>

using namespace std;

int img[9][20] = {
    0,0,0,0,0,0,9,0,0,0,0,9,9,9,9,9,0,0,9,9,
    9,9,9,9,9,0,9,0,0,0,0,0,0,0,0,9,0,0,9,9,
    0,0,9,0,0,0,9,0,0,0,0,9,9,9,9,9,0,0,9,9,
    0,9,9,9,0,0,9,9,9,0,0,9,0,0,0,0,0,0,9,9,
    0,9,0,9,0,0,9,0,0,0,0,9,9,9,9,9,0,0,9,9,
    9,9,0,9,9,0,9,0,0,0,0,0,0,0,0,0,0,0,9,9,
    9,0,0,0,9,0,9,0,0,0,0,0,9,0,9,0,0,0,0,0,
    9,0,0,0,9,0,9,0,0,0,0,0,9,0,9,0,0,0,9,9,
    0,0,0,0,0,0,9,0,0,0,0,9,9,9,9,9,0,0,9,9
  };

void labelComponent(int img[9][20], int x, int y, int label){
    if( x<0 || y<0 || x>=20 || y>=9 ) return;

    if( img[y][x] == 9 ) {
    img[y][x] = label;
        
    labelComponent( img, x-1, y, label );
    labelComponent( img,  x, y-1, label );
    labelComponent( img, x+1, y, label );
    labelComponent( img,  x, y+1, label );
    }
}

void blobColoring( int img[9][20] ) {
    int label = 1;

    for( int y=0 ; y<9 ; y++ ){
        for( int x=0 ; x<20 ; x++ ){
            if( img[y][x] == 9 ){
                labelComponent( img, x, y, label++ );
            }
        }
    }
}

void printI(int img[9][20], string str = ""){
    
    cout << str << "\n";
    
    for(int i=0; i<9; i++){
        for(int j=0; j<20; j++){
            if(!img[i][j])
                cout << ".";
            
            else
                cout << img[i][j];
        }
        cout << "\n";
    }
}

int main(){
    
    printI( img, "<Original image>" );
    blobColoring( img );
    cout << "\n";
    printI( img, "<Labelled image>" );

    return 0;
}
```

#### 영역 채색 구현 결과
```
<Original image>
......9....99999..99
99999.9........9..99
..9...9....99999..99
.999..999..9......99
.9.9..9....99999..99
99.99.9...........99
9...9.9.....9.9.....
9...9.9.....9.9...99
......9....99999..99

<Labelled image>
......1....22222..33
44444.1........2..33
..4...1....22222..33
.444..111..2......33
.4.4..1....22222..33
44.44.1...........33
4...4.1.....5.5.....
4...4.1.....5.5...66
......1....55555..66
```

<br/>

### 미로 탐색
순환을 활용한 dfs로 구현됨

#### 미로 탐색 구현 
```
constint MAZE_SIZE = 6;
char map[MAZE_SIZE][MAZE_SIZE] = {
	{'1', '1', '1', '1', '1', '1'},
	{'e', '0', '1', '0', '0', '1'},
	{'1', '0', '0', '0', '1', '1'},
	{'1', '0', '1', '0', '1', '1'},
	{'1', '0', '1', '0', '0', 'x'},
	{'1', '1', '1', '1', '1', '1'},
};

void searchRecur( Location2D pt ) {
     printf("(%d,%d) ", pt.row, pt.col);
     
     if( done ) return;          
     if( pt == locExit ) { 
	     done = true;
	     return;
     }
     
     int r = pt.row;
     int c = pt.col;
     map[r][c] = '.';

     if( isValidLoc(r-1, c) ) searchRecur( Location2D(r-1, c) );
     if( isValidLoc(r+1, c) ) searchRecur( Location2D(r+1, c) );
     if( isValidLoc(r, c-1) ) searchRecur( Location2D(r, c-1) );
     if( isValidLoc(r, c+1) ) searchRecur( Location2D(r, c+1) );
}

void main()
{
     locEntry.set(1,0);
     locExit.set(4,5);
     
     searchRecur( locEntry ); 
     
     if(done) printf("\n ==> 출구가 탐지되었습니다.\n");
     else printf("\n ==> 출구를 찾지 못했습니다.\n");
}
```

<br/>
<br/>

## [ 화상 강의 토론 ]
조장이 기본 개념을 설명해주고, 퀴즈와 챌린지 문제를 같이 풀었다. 생각보다 빨리 끝났던 것 같다.

<br/>
<br/>

## [ 7주차 수업 소감 ]
순환의 기본 개념이 무엇인지는 알겠지만, 직접 구현하기에는 아직 이해가 부족했던 것 같다. 문제에 대해 어디서부터 어떻게 순환 함수를 적용해야 하는지 정하는 것이 아직 미숙한 것 같다.
지금까지 풀어왔던 알고리즘 문제들에서 순환/재귀를 활용한 dfs를 사용할 때 쉬운 유형은 잘 풀고, 조금 복잡한 유형은 손도 못 댔었는데, 다 기본기가 부족해서 그랬던 것 같다. 이번 기회에 기초를 다시 돌아보자.
