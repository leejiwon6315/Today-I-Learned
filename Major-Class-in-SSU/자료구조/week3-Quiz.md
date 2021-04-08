# week3-Quiz
> 개인적으로 생각해 본 정답이기 때문에 오답이거나 다른 해답이 있을 수 있습니다. <br/>

<br/>

## Q3.

### 1. 순서가 A, B, C, D로 정해진 입력 자료를 스택에 입력하였다가 출력할 때, 가능한 출력 순서의 결과가 아닌 것은?
1. D, A, B, C
2. A, B, C, D
3. A, B, D, C
4. B, C, D, A
> 1번

<br/>

### 2. 스택의 응용 분야로 거리가 먼 것은?
1. 미로 찾기
2. 수식 계산 및 수식 표기법
3. 운영체제의 작업 스케줄링
4. 서브루틴의 복귀번지 저장
> 3번

<br/>

### 3. 스택에 대한 설명을 틀린 것은?
1. 입출력이 한쪽 끝으로만 제한된 리스트이다
2. head와 tail의 2개의 포인터를 가지고 있다.
3. LIFO 구조이다.
4. 배열로도 구현이 가능하다.
> 2번 - 큐

<br/>

### 4. 스택의 자료 삭제 알고리즘이다. () 한의 내용으로 가장 적합한 것은?
```
if top = 0;
    then (    )

else{
    remove S(top)
    top = top-1
}
```
1. Overflow
2. top = top + 1
3. Underflow 
4. top = top - 2
> 3번 - 삭제할 요소가 없기 때문에

<br/>

### 5. 스택 알고리즘에 T가 스택 포인터이고, m이 스택의 길이일 때, 서브루틴 "AA"가 처리해야 하는 것은? 
```
T <- T + 1
if T > m then goto AA
else STACK(T) <- item
```
1. 오버플로우 처리
2. 언더플로우 처리
3. 삭제 처리
4. 삽입 처리
> 1번 - 스택 길이보다 요소가 더 많음 = 오버플로우

<br/>

### 6. 스택에서 삽입 작업이 발생하면 top 값은 어떻게 변경되는가?
1. top == 0
2. top == 1
3. top = top - 1
4. top = top + 1
> 4번

<br/>

### 7. 문자 A, B, C, D를 스택에 넣었다가 다시 꺼내어 출력하면 어떻게 되는가?
1. A, B, C, D, E
2. E, D, C, B, A
3. A, B, C, E, D
4. B, A, C, D, E
> 2번 - 스택은 후입 선출

<br/>

### 8. 10, 20, 30, 40, 50을 스택에 넣었다가 3개의 항목을 삭제했다. 남아 있는 항목은? 
> 10, 20

<br/>

### 9. 다음 중 배열로 구현된 스택에서 공백 상태에 해당하는 조건은? 또 포화 상태에 해당하는 조건은?
1. top == -1
2. top == 0
3. top == (MAX_STACK_SIZE-1)
4. top == MAX_STACK_SIZE
> 공백 : 1번<br/>
> 포화 : 3번

<br/>

### 10. 다음과 같은 중위 표현을 후위식으로 옳게 표현한 것은?
```
A*(B+C)/D-E
```
1. `+E-AB*CE/`
2. `ABC+*D/E-`
3. `+D/*E-ABC`
4. `ABC+D/*E-`
> 2번

<br/>

### 11. 스택에 항목들을 삽입하고 삭제하는 연산은 시간 복잡도가 어떻게 되는가?
1. O(1)
2. O(log2n)
3. O(n)
4. O(n^2)
> 1번

<br/>

### 12. A, B가 스택이라고 하고, a, b, c, d가 객체라고 하자. 다음의 일련의 스택 연산을 수행한 뒤의 각각의 스택을 그려라
```
A.push(a);
A.push(b);
A.push(c);
B.push(d);
B.push(A.pop());
A.push(B.pop());
B.pop();
```
> A스택 : (bottom) | a | b | c | (top)<br/>
> B스택 : 공백

<br/>

### 13. 괄호 검사 프로그램에서 다음과 같은 수식이 주어졌을 경우, 알고리즘을 추적해서 각 단계에서의 스택 내용을 그려라
```
a{b[(c+d)*e]-f}
```
> 1: (bottom) | { | (top)<br/>
> 2: (bottom) | { | [ | (top)<br/>
> 3: (bottom) | { | [ | ( | (top)<br/>
> 4: (bottom) | { | [ | (top)<br/>
> 5: (bottom) | { | (top)<br/>
> 6: 공백

<br/>

### 14. 다음은 어떤 수식의 후위 표기이다. 이 때 최초로 수행되는 연산은 어느 것인가?
```
ABE+D*-
```
1. B + E
2. E + A
3. D * B
4. B * E
> 1번

<br/>
<br/>

## C3.
### 3장_2 PPT 21-26페이지에 있는 미로탐색문제를 c++로 구현하세요.
```
#include <iostream>
#include <stack>

using namespace std;

const int Maze_size = 6;
char map[Maze_size][Maze_size] = {  // 미로 맵
    {'1', '1', '1', '1', '1', '1'},
    {'e', '0', '1', '0', '0', '1'},
    {'1', '0', '0', '0', '1', '1'},
    {'1', '0', '1', '0', '1', '1'},
    {'1', '0', '1', '0', '0', 'x'},
    {'1', '1', '1', '1', '1', '1'}
};

struct Location2D{
    //  x, y 좌표를 함께 계산할 struct 생성
    
    int row;
    int col;
    Location2D(int r=0, int c=0){
        //위치 초기화
        row = r;
        col = c;
    }
    
    bool isNeighbor(Location2D &p){
        // 상하좌우를 탐색, p의 위치가 자신의 주변인지 검사
        return ((row == p.row && (col == p.col-1 || col == p.col+1))||(col == p.col && (row == p.row-1 || row == p.row+1)));
    }
    
    
    bool operator == (Location2D &p){
        //  p가 자신과 같은 위치인지를 검사
        return row == p.row && col == p.col;
    }
};

bool isValidLoc(int r, int c){
    if(r<0 || c<0 || r>=Maze_size || c>=Maze_size) return false;    // 맵의 범위 밖이면 false
    else return map[r][c] == '0' || map[r][c] == 'x';   // 맵 내에 탐색하지 않을 곳을 반환
}

int main(){
    stack<Location2D> locStack;
    Location2D entry(1,0);  // 시작 지점 입력
    
    locStack.push(entry);   // 시작 지점을 스택에 push
    
    while(!locStack.empty()){
        Location2D here = locStack.top();   // 스택 맨 위에 있는 값을 here 로 복사
        locStack.pop();     // 맨 위 값 제거
        
        int r = here.row, c = here.col;
        cout << r << "," << c << " " ;
        
        if(map[r][c] == 'x'){
            cout << "미로 탐색 성공 \n";
            return 0;
        }
        else{
            map[r][c] = '.';    // 이미 탐색한 부분을 '.'으로 변환
            if(isValidLoc(r-1, c)) locStack.push(Location2D(r-1, c));   // 탐색하지 못한 곳을 찾아 스택에 push
            if(isValidLoc(r+1, c)) locStack.push(Location2D(r+1, c));
            if(isValidLoc(r, c-1)) locStack.push(Location2D(r, c-1));
            if(isValidLoc(r, c+1)) locStack.push(Location2D(r, c+1));
        }
    }
    
    cout << "미로 탐색 실패 \n";
    return 0;
}

```
