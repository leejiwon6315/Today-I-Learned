# Week10
> 우선순위 큐

## [ 온라인 강의 내용 ]
### Priority_queue
+ 우선순위를 가진 항목들을 저장하는 큐
+ 우선 순위가 높은 데이터가 먼저 나가게 됨

#### ADT
+ `insert(item)`: 우선순위 큐에 항목 item을 추가
+ `remove()` : 우선순위 큐로부터 가장 우선순위가 높은 요소를 삭제하고 이 요소를 반환
+ `find()` : 우선순위가 가장 높은 요소를 삭제하지 않고 반환
+ `isEmpty()` : 우선순위 큐가 공백 상태인지를 검사
+ `isFull()` : 우선순위 큐가 포화 상태인지를 검사
+ `display()` : 우선순위 큐의 모든 요소들의 출력<br/>

#### 우선순위 큐 구현 방법
+ 배열을 이용한 구현
+ 연결리스트를 이용한 구현
+ 힙을 이용한 구현(완전이진트리)<br/>
  -> 삽입과 삭제가 O(logn)의 시간복잡도를 가지기 때문에 다른 구현 방법에 비해 효율적
<br/>

### Heap
+ 더미
+ 완전이진트리
+ 최대/최소 힙

#### 최대/최소 힙
+ max heap : 부모 노드의 키값이 자식 노드의 키값보다 크거나 같은 완전이진트리<br/>
  -> key(부모노드) >= key(자식노드)
  
+ min heap : 부모 노드의 키값이 자식 노드의 키값보다 작거나 같은 완전이진트리<br/>
  -> key(부모노드) <= key(자식노드)

#### 힙의 높이
n개의 노드를 가지고 있는 힙의 높이는 O(logn)<br/>
+ 힙은 완전이진트리
+ 마지막 레벨을 제외하고 각 레벨 i에 2^𝑖−1개의 노드 존재

#### 부모노드와 자식노드의 관계
+ 왼쪽 자식의 인덱스 : (부모의 인덱스)*2 
+ 오른쪽 자식의 인덱스 : (부모의 인덱스)*2 + 1 
+ 부모의 인덱스 : (자식의 인덱스)/2 

#### upHeap
삽입 연산
+ 힙에 새로운 요소가 들어 오면, 일단 새로운 노드를 힙의 마지막 노드에 이어서 삽입
+ 삽입 후에 새로운 노드를 부모 노드들과 교환해서 힙의 성질을 만족

#### downHeap
삭제 연산<br/>
+ 최대힙에서의 삭제 : 항상 루트가 삭제(가장 큰 키값의 노드)
+ 루트에서부터 단말노드까지의 경로에 있는 노드들을 교환하여 힙의 성질을 만족

#### 힙의 복잡도
+ 삽입 연산에서 최악의 경우 : O(logn)<br/>
  -> 루트 노드까지 올라가야 하므로 트리의 높이에 해당하는 비교 연산 및 이동 연산이 필요
  
+ 삭제 연산에서 최악의 경우 : O(logn)<br/>
  -> 가장 아래 레벨까지 내려가야 하므로 역시 트리의 높이 만큼의 시간 소요

#### 힙의 구현
```
#include <iostream>
#include <cstdio>

using namespace std;

class HeapNode{
     int key;
     public:
         HeapNode(int k=0) : key(k){}
         void setKey(int k){
             key = k;
         }

         int getKey(){
             return key;
         }

         void display(){
             printf("%4d", key);
         }
};

class MaxHeap
{
     HeapNode node[MAX_ELEMENT];    
     int size;            
     
public:
     MaxHeap() : size(0){}
     bool isEmpty(){
         return size == 0;
     }
     
     bool isFull(){
         return size == MAX_ELEMENT-1;
     }

     HeapNode& getParent(int i){
         return node[i/2];
     }  
     
     HeapNode& getLeft(int i){
         return node[i*2];
     }   
     
     HeapNode& getRight(int i){
         return node[i*2+1];
     } 

     void insert(int key){
         if( isFull() ) return;	
         int i = ++size; 

         while( i!=1 && key>getParent(i).getKey()) {
             node[i] = getParent(i);
             i /= 2;
         }
         
         node[i].setKey( key );	
     } 
     
     HeapNode remove(){
         if( isEmpty() ) error();
         
         HeapNode item = node[1];
         HeapNode last = node[size--];
         
         int parent = 1;
         int child = 2; 	
             
         while( child <= size ){
             if( (child < size) && (getLeft(parent).getKey() < getRight(parent).getKey())) child++;
             if( last.getKey() >= node[child].getKey() ) break;

             node[parent] = node[child];
             parent = child;
             child *= 2;
         }
             
         node[parent] = last;  
         return item;  
     }
     
     HeapNode find(){
         return node[1];
     }
};

int main(){
    MaxHeap heap;

    heap.insert(10);
    heap.insert(5);
    heap.insert(30);
    heap.insert(8);
    heap.insert(9);
    heap.insert(3);
    heap.insert(7);
    heap.display();     
    heap.remove(); 
    heap.display();
    heap.remove();            
    heap.display();
    printf("\n");

    return 0;
}
```
<br/>

### 힙 정렬
+ 먼저 정렬해야 할 n개의 요소들을 최대 힙에 삽입
+ 한번에 하나씩 요소를 힙에서 삭제하여 저장
+ 삭제되는 요소들은 값이 증가되는 순서(최소힙의 경우)

#### 힙정렬 시간 복잡도
+ 하나의 요소의 삽입 삭제 : O(logn)
+ 요소의 개수 n개 : O(nlogn)

#### 힙정렬 구현
```
void heapSort(int a[], int n){
    MaxHeap h;
    
    for(int i=0; i<n; i++) h.insert(a[i]);
    
    for(int i=n-1; i>=0; i--){
        a[i] = h.remove() -> getKey();
    }
}
```
<br/>

### STL 사용 우선순위큐
```
#include <iostream>
#include <queue>
#include <vector>

using namespace std;

priority_queue<자료형> 이름
...

```

+ 최대힙 구현 : `priority_queue<int> maxHeap`
+ 최소힙 구현 : `priority_queue<int, vector<int>, greater<int>> minHeap`

#### STL 사용 힙정렬
```
#include <cstdio>
#include <queue>
#include <functional>    //c++에서는 <iostream>, <vector>, <queue> 사용

using namespace std;

void heapSortInc( int a[], int n){
    priority_queue<int, vector<int>, greater<int>> minHeap;
    
    for(int i=0; i<n; i++) minHeap.push(a[i]);

    for(int i=0; i<n; i++){
        a[i] = minHeap.top();
        minHeap.pop();
    }
}

```
<br/>
<br/>

## [ 화상 강의 토론 ]

<br/>
<br/>

## [ 10주차 수업 소감 ]
