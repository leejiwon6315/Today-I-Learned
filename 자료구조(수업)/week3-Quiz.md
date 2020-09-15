# week3-Quiz
> 개인적으로 생각해 본 정답이기 때문에 오답이거나 다른 해답이 있을 수 있습니다. <br/>

<br/>

## Q3.


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
