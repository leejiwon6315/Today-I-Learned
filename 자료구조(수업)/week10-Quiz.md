# week10-Quiz
> 개인적으로 생각해 본 정답이기 때문에 오답이거나 다른 해답이 있을 수 있습니다. <br/>

<br/>

## Q10.
### 1. 힙을 구현한 배열의 내용이 다음과 같을 때 물음에 답하라.
```
      -----------------------------
인덱스 | 0 | 1 | 2 | 3 | 4 | 5 | 6  |
      -----------------------------
데이터 | 0 | 2 | 5 | 6 | 8 | 9 | 10 |
      -----------------------------
```
#### 1-1. 위의 배열은 최대 힙인가 최소 힙인가?
> 최소 힙

#### 1-2. 위의 배열에서 해당하는 힙 트리를 그려라
```
       2
    /     \
   5       6
  / \     / 
 8   9   10   
```
 
#### 1-3. 이 힙에서 삭제 연산을 한번 수행한 후의 배열 내용을 적어라
```
      -----------------------------
인덱스 | 0 | 1 | 2 | 3 | 4  | 5 | 6 |
      -----------------------------
데이터 | 0 | 5 | 8 | 6 | 10 | 9 |   |
      -----------------------------
```

#### 1-4. 데이터 7을 삽입한 후의 배열 내용을 적어라
```
      -----------------------------
인덱스 | 0 | 1 | 2 | 3 | 4  | 5 | 6 |
      -----------------------------
데이터 | 0 | 5 | 8 | 6 | 10 | 9 | 7 |
      -----------------------------
```
<br/>

### 2. 다음의 최소 힙 트리에서 물음에 답하라
```
       3
    /     \
   6       7
  / \     / \
12  13   15  20
```
#### 2-1. 2를 삽입하였을 경우, 힙 트리를 재구성하는 과정을 보여라
```
// 1단계
           3
        /     \
       6       7
      / \     / \
    12  13   15  20
   /
  2 

// 2단계
           3
        /     \
       6       7
      / \     / \
    2   13   15  20
   /
 12 
 
// 3단계
           3
        /     \
       2       7
      / \     / \
    6   13   15  20
   /
 12 
 
// 3단계
           2
        /     \
       3       7
      / \     / \
    6   13   15  20
   /
 12  
```

#### 2-2. 삭제연산이 한번 이루어진 다음에 힙을 재구성하는 과정을 보여라
```
// 1단계
           
        /     \
       6       7
      / \     / \
    12  13   15  20
    
// 2단계
           20
        /     \
       6       7
      / \     / 
    12  13   15  
 
// 3단계
           6
        /     \
       20      7
      / \     / 
    12  13   15  
    
// 4단계
           6
        /     \
       12      7
      / \     / 
    20  13   15      
```
<br/>

### 3. 다음의 파일에 대하여 물음에 답하라.
`10, 40, 30, 5, 12, 6, 15, 9, 60`

#### 3-1. 위의 파일을 순차적으로 읽어서 최대힙 트리를 구성하라. 공백 트리에서 최대 힙 트리가 만들어지는 과정을 보여라
```
// 1단계
          10
        /  
       40  
    
// 2단계
          40
        /  
       10  
 
// 3단계
          40
        /    \ 
       10    30
    
// 4단계
          40
        /    \ 
       10    30
      /
     5
     
// 5단계
          40
        /    \ 
       10    30
      /  \
     5   12
     
// 5단계
          40
        /    \ 
       12    30
      /  \
     5   10
     
// 5단계
           40
        /      \ 
       12      30
      /  \    /
     5   10  6

// 6단계
           40
        /      \ 
       12      30
      /  \    /  \
     5   10  6    15
     
// 7단계
           40
        /      \ 
       12      30
      /  \    /  \
     5   10  6    15
    /
   9
   
// 8단계
           40
        /      \ 
       12      30
      /  \    /  \
     9   10  6    15
    /
   5 
   
// 9단계
           40
        /      \ 
       12      30
      /  \    /  \
     9   10  6    15
    / \
   5  60
   
// 10단계
           40
        /      \ 
       12      30
      /  \    /  \
     60  10  6    15
    / \
   5   9
   
// 11단계
           40
        /      \ 
       60      30
      /  \    /  \
     12  10  6    15
    / \
   5   9
   
// 12단계
           60
        /      \ 
       40      30
      /  \    /  \
     12  10  6    15
    / \
   5   9
```

#### 3-2. (3-1)에서 구성된 최대 힙 트리가 저장된 배열의 내용을 표시하라
`|   | 60 | 40 | 30 | 12 | 10 | 6 | 15 | 5 | 9 |`

#### 3-3. (3-1)에서 구성된 최대 힙 트리에서 최댓값을 제거한 다음 재정비하는 과정을 설명하라
```
// 1단계
           
        /      \ 
       40      30
      /  \    /  \
     12  10  6    15
    / \
   5   9
   
// 2단계
            9
        /      \ 
       40      30
      /  \    /  \
     12  10  6    15
    / 
   5    
   
// 3단계
           40
        /      \ 
       9       30
      /  \    /  \
     12  10  6    15
    / 
   5 

   
// 4단계
           40
        /      \ 
       12       30
      /  \     /  \
     9   10   6    15
    / 
   5    
```

#### 3-4. 위의 파일을 순차적으로 읽어서 최소 힙 트리를 구성하라. 공백 트리에서 최소 힙 트리가 만들어지는 과정을 보여라
```
// 1단계
          10
        /  
       40  
    
// 2단계
          10
        /    \
       40    30
 
// 3단계
          10
        /    \
       40    30
      /
     5
     
// 4단계
          10
        /    \ 
       5     30
      /
    40
     
// 5단계
           5
        /     \ 
       10     30
      / 
     40   
     
// 5단계
           5
        /     \ 
       10     30
      /  \
     40  12
     
// 5단계
            5
        /      \ 
       10      30
      /  \    /
     40  12  6

// 6단계
            5
        /      \ 
       10      6
      /  \    /  
     40  12  30
     
// 7단계
           5
        /      \ 
       10       6
      /  \     /  \
    40    12  30   15
   
// 8단계
           5
        /      \ 
       10       6
      /  \     /  \
    40    12  30   15
   /
  9
   
// 9단계
           5
        /      \ 
       10       6
      /  \     /  \
     9    12  30   15
   /
  40
   
// 10단계
           5
        /      \ 
       9        6
      /  \     /  \
    10    12  30   15
   /
  40
   
// 11단계
           5
        /      \ 
       9        6
      /  \     /  \
    10    12  30   15
   /  \
  40   60
```

#### 3-5. (3-4)에서 구성된 최소 힙 트리가 저장된 배열의 내용을 표시하라
`|   | 5 | 9 | 6 | 10 | 12 | 30 | 15 | 40 | 60 |`
#### 3-6. (3-4)에서 구성된 최소 힙 트리에서 최솟값을 제거한 다음 재정비하는 과정을 설명하라
```
// 1단계

        /      \ 
       9        6
      /  \     /  \
    10    12  30   15
   /  \
  40   60
  
// 2단계
           60
        /      \ 
       9        6
      /  \     /  \
    10    12  30   15
   / 
  40  

  
// 3단계
           9
        /      \ 
       60       6
      /  \     /  \
    10    12  30   15
   / 
  40  
  
// 4단계
           9
        /      \ 
       10       6
      /  \     /  \
    60    12  30   15
   / 
  40  
  
// 5단계
           9
        /      \ 
       10       6
      /  \     /  \
    40    12  30   15
   / 
  60 
```

## C10
### 1. 프로그램 10.1(HeapNode) 과 10.2(MaxHeap)을 이용하여 프로그램 10.6을 구현하세요. (C10자료 참고)
```
#include <iostream>
#include <vector>
#include <stdio.h>
#include <cstdio>
#define MAX_ELEMENT 200

using namespace std;

class HeapNode
{
    int key;

public:
    HeapNode( int key=0 ) : key(key) {}
    ~HeapNode(void){}
    void setKey(int k){ key = k; }
    int getKey(){ return key; }
    void display(){ printf("\t%d", key); }
};


class MaxHeap
{
    HeapNode node[MAX_ELEMENT];
    int size;

public:
    MaxHeap() : size(0){}
    bool isEmpty(){ return size == 0; }
    bool isFull(){ return size == MAX_ELEMENT-1; }

    HeapNode& getParent(int i){ return node[i/2]; }
    HeapNode& getLeft(int i){ return node[i*2]; }
    HeapNode& getRight(int i){ return node[i*2+1];}

    void insert( int key ){
        if( isFull() ) return;

        int i = ++size;

        while( i!=1 && key>getParent(i).getKey()){
            node[i] = getParent(i);
            i /= 2;
        }
        node[i].setKey( key );
    }

    HeapNode remove(){
        if( isEmpty() ) return NULL;

        HeapNode root = node[1];
        HeapNode last = node[size--];

        int parent = 1;
        int child = 2;

        while( child <= size ){

          if( child < size && getLeft(parent).getKey() < getRight(parent).getKey()) child++;
          if( last.getKey() >= node[child].getKey() ) break;

          node[parent] = node[child];
          parent = child;
          child *= 2;
        }

        node[parent] = last;
        return root;
    }

    HeapNode find(){ return node[1]; }

    void display(){
        for(int i=1, level=1 ; i<= size ; i++){
            if( i == level ) {
                printf("\n");
                level *= 2;
            }
            node[i].display();
        }
        printf("\n-------------------------------------------");
    }
};

void heapSortLess(vector<int> &a){
    MaxHeap mHeap;
    
    for(int i : a) mHeap.insert(i);
    for(int i=a.size()-1; i>=0; i--){
        a[i] = mHeap.remove().getKey();
    }
}

void heapSortGreater(vector<int> &a){
    MaxHeap mHeap;
    
    for(int i : a) mHeap.insert(i);
    for(int i=0; i<a.size(); i++){
        a[i] = mHeap.remove().getKey();
    }
}

int main(){
    vector<int> a = {3, 5, 9, 10, 423, 2, 1, 64, 67};
    heapSortLess(a);
    
    cout << "오름차순\n";
    for(int i : a){
        if(i == a[a.size()-1]) cout << i << "\n\n";
        else cout << i <<", ";
    }
    
    heapSortGreater(a);
    cout << "내림차순\n";
    for(int i : a){
        if(i == a[a.size()-1]) cout << i << "\n\n";
        else cout << i <<", ";
    }
    return 0;
}

[결과]
오름차순
1, 2, 3, 5, 9, 10, 64, 67, 423

내림차순
423, 67, 64, 10, 9, 5, 3, 2, 1
```
<br/>

### 2. 프로그램 10.7(STL의 우선순위큐를 이용한 정렬)을 구현하고, 내림차순(decreasing) 정렬을 테스트하세요
```
#include <iostream>
#include <queue>
#include <vector>
using namespace std;

void heapSortDec(vector<int> &a){
    priority_queue<int> maxHeap;

    for(int i : a) maxHeap.push(i);

    for(int i=0; i<a.size(); i++){
        a[i] = maxHeap.top();
        maxHeap.pop();
    }

}

int main(){
    vector<int> a = {3, 5, 9, 10, 423, 2, 1, 64, 67};
    
    heapSortDec(a);

    for(int i : a){
        if(i == a[a.size()-1]) cout << i << "\n";
        else cout << i <<", ";
    }
    return 0;
}

[결과]
423, 67, 64, 10, 9, 5, 3, 2, 1
```
