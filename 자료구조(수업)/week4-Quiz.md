# week4-Quiz
> 개인적으로 생각해 본 정답이기 때문에 오답이거나 다른 해답이 있을 수 있습니다. <br/>

<br/>

## Q4.

### 1. 문자 A, B, C, D, E를 큐에 넣었다가 다시 꺼내어 출력하면 어떻게 되는가?
1. A, B, C, D, E<br/>
2. E, D, C, B, A<br/>
3. A, B, C, E, D<br/>
4. B, A, C, D, E<br/>
> 1번 - 큐는 선입선출 방식
<br/>

### 2. 원형 큐의 front와 rear의 값이 각각 7과 2일 때, 이 원형 큐가 가지고 있는 데이터의 개수는?
(단, MAX_QUEUE_SIZE는 12이고, front와 rear의 초깃값은 0이다.)
> 8개 - 7(front), 8, 9, 10, 11, 0, 1, 2(rear)
<br/>

### 3. 10, 20, 30, 40, 50을 큐에 넣었다고 가정하고 3개의 항목을 삭제하였다. 남아있는 항목은?
> 40, 50
<br/>

### 4.원형 큐에서 front가 3이고 rear가 5라고 하면 현재 원형 큐에 저장된 요소들의 개수는?
1. 1<br/>
2. 2<br/>
3. 3<br/>
4. 4<br/>
> 3번 - 3(front), 4, 5(rear)
<br/>

### 5. 다음 중 원형 큐에서 공백 상태에 해당하는 조건은? 또 포화 상태에 해당되는 조건은?
1. front == 0 && rear == 0<br/>
2. front == (MAX_QUEUE_SIZE-1) && rear == (MAX_QUEUE_SIZE-1)<br/>
3. front == rear<br/>
4. front == (rear+1)%MAX_QUEUE_SIZE<br/>
> 공백상태 : 3번 
> 포화상태 : 4번
<br/>

### 6. 큐에 항목들을 삽입하고 삭제하는 연산은 시간 복잡도가 어떻게 되는가?
1. O(1)<br/>
2. O(log2n)<br/>
3. O(n)<br/>
4. O(n^2)<br/>
> 1번
<br/>

### 7. 크기가 8인 원형 큐 A에 다음과 같이 삽입과 삭제가 되풀이 되었을 경우에 각 단계에서의 원형 큐의 내용(1차원 배열의 내용, front와 rear의 값)을 나타내라
```
A.enqueue(1);
A.enqueue(2);
A.enqueue(3); 
A.dequeue();  
A.enqueue(4);  
A.enqueue(5);  
A.enqueue(6);   
A.enqueue(7);   
A.dequeue();  
```
> (front - index: 0)null | 1(rear - index: 1)<br/>
> (front - index: 0)null | 1 | 2(rear - index: 2)<br/>
> (front - index: 0)null | 1 | 2 | 3(rear - index: 3)<br/>
> (front - index: 1)null | 2 | 3(rear - index: 3)<br/>
> (front - index: 1)null | 2 | 3 | 4(rear - index: 4)<br/>
> (front - index: 1)null | 2 | 3 | 4 | 5(rear - index: 5)<br/>
> (front - index: 1)null | 2 | 3 | 4 | 5 | 6(rear - index: 6)<br/>
> (front - index: 1)null | 2 | 3 | 4 | 5 | 6 | 7(rear - index: 7)<br/>
> (front - index: 2)null | 3 | 4 | 5 | 6 | 7(rear - index: 7)<br/>
<br/>

### 8. 피보나치수열을 효과적으로 계산하기 위하여 큐를 이용할 수 있다. 만일 피보나치수열을 순환에 의하여 계산하게 되면 경우에 따라서는 많은 순환 함수의 호출에 의해 비효율 적인 수 있다. 이를 개선하기 휘하여 큐를 사용하는데 큐에는 처음에는 F(0)와 F(1)의 값이 들어 있어 다음에 F(2)를 계산할 때 F(0)를 큐에서 제거한다. 그 다음에 계산된 F(b)를 다시 큐에 넣는다. 피보나치 수열은 다음과 같이 정의된다. 큐를 이용하여 피보나치 수열을 계산하는 프로그램을 작성하라.
F(0)=0, F(1)=1<br/>
F(n)=F(n-1)+F(n-2)<br/>

<br/>
<br/>

## C3.
### 4장_2 PPT 8페이지에 있는 미로탐색 문제를 큐를 이용하여 너비우선탐색(Breadth First Search)방식으로 구현하세요.
```
#include <iostream>
#include <queue>

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
    queue<Location2D> locQueue;
    Location2D entry(1,0);  // 시작 지점 입력
    
    locQueue.push(entry);   // 큐에 시작 지점 push
    
    while(!locQueue.empty()){
        Location2D here = locQueue.front(); // front를 현재위치에 담고
        locQueue.pop(); //  pop 하여 비워줌
        
        int r = here.row, c = here.col;
        cout << r << "," << c << " " ;
        
        if(map[r][c] == 'x'){
            cout << "미로 탐색 성공 \n";
            return 0;
        }
        else{
            map[r][c] = '.';    // 이미 탐색한 부분을 '.'으로 변환
            if(isValidLoc(r-1, c)) locQueue.push(Location2D(r-1, c));   // 탐색하지 못한 곳을 찾아 큐에 push
            if(isValidLoc(r+1, c)) locQueue.push(Location2D(r+1, c));
            if(isValidLoc(r, c-1)) locQueue.push(Location2D(r, c-1));
            if(isValidLoc(r, c+1)) locQueue.push(Location2D(r, c+1));
        }
    }
    
    cout << "미로 탐색 실패 \n";
    return 0;
}

```
