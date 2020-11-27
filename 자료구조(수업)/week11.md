# Week11
> 그래프

## [ 온라인 강의 내용 ]
### 그래프
+ 연결되어 있는 객체 간의 관계를 표현하는 자료구조
+ 가장 일반적인 자료구조 형태

#### 그래프의 정의
그래프 G는 (V, E)로 표시
+ 정점(vertices) 또는 노드(node)
  - 여러 가지 특성을 가질 수 있는 객체 의미
  - V(G) : 그래프 G의 정점들의 집합

+ 간선(edge) 또는 링크(link)
  - 정점들 간의 관계 의미
  - E(G) : 그래프 G의 간선들의 집합

#### 그래프의 종류
+ 무방향 그래프
  - 간선을 통해서 양방향으로 갈수 있음
  - (A, B)로 표현
  - (A, B) = (B, A)
  
+ 방향 그래프(directed graph)
  - 간선을 통해서 한쪽 방향으로만 갈 수 있음
  - 일방통행 길
  - <A, B> 로 표현 
  - <A, B> ≠ <B, A> 
  
+ 가중치 그래프(weighted graph)
  - 네트워크(network)라고도 함
  - 간선에 비용(cost)이나 가중치(weight)가 할당된 그래프
  
+ 부분 그래프
  - 정점 집합 V(G)와 간선 집합 E(G)의
  - 부분 집합으로 이루어진 그래프

#### 그래프 표현의 예
+ `V(G1)= {0, 1, 2, 3}, E(G1)= {(0, 1), (0, 2), (0, 3), (1, 2), (2, 3)} `
+ `V(G2)= {0, 1, 2, 3}, E(G3)= {(0, 1), (0, 2))} `
+ `V(G2)= {0, 1, 2}, E(G2)= {<0, 1>, <1, 0>, <1, 2>} `

#### 그래프의 용어
+ 인접 정점(adjacent vertex)
  - 하나의 정점에서 간선에 의해 직접 연결된 정점

+ 차수(degree)
  - 하나의 정점에 연결된 다른 정점의 수
  - 무방향 그래프
    + 차수의 합은 간선 수의 2배
  - 방향 그래프
    + 진입차수, 진출차수
    + 모든 진입(진출) 차수의 합은 간선의 수

+ 그래프의 경로(path)
  - 무방향 그래프의 정점 s로부터 정점 e까지의 경로
    + 정점의 나열 `s, v1, v2, ..., vk, e`
    + 반드시 간선 `(s, v1), (v1, v2), ... , (vk, e)` 존재해야 함
  - 방향 그래프의 정점 s로부터 정점 e까지의 경로
    + 정점의 나열 `s, v1, v2, ..., vk, e`
    + 반드시 간선 `<s, v1>, <v1, v2>, ... ,<vk, e>` 존재해야 함

+ 경로의 길이(length)
  - 경로를 구성하는데 사용된 간선의 수
  
+ 단순 경로(simple path) 
  - 경로 중에서 반복되는 간선이 없는 경로

+ 사이클(cycle)
  - 시작 정점과 종료 정점이 동일한 경로

+ 연결 그래프(connected graph)
  - 모든 정점쌍에 대한 경로 존재

+ 트리(tree)
  - 그래프의 특수한 형태로서 사이클을 가지지 않는 연결 그래프

+ 완전 그래프(complete graph)
  - 모든 정점이 연결되어 있는 그래프
  - n개의 정점을 가진 무방향 완전그래프의 간선의 수 `n×(n-1)/2`
  
#### 그래프 구현
데이터
+ 정점의 집합과 간선의 집합

ADT
+ `create()` : 그래프를 생성
+ `isEmpty()` : 그래프가 공백 상태인지 확인
+ `insertVertex(v)` : 그래프에 정점 v를 삽입
+ `insertEdge(u,v)` : 그래프에 간선 (u,v)를 삽입 
+ `deleteVertex(v)` : 그래프의 정점 v를 삭제
+ `deleteEdge(u,v)` : 그래프 g의 간선 (u,v)를 삭제 
+ `adjacent(v)` : 정점 v에 인접한 모든 정점의 집합을 반환
<br/>

### 그래프의 표현 방법
#### 인접 행렬
+ (n*n)의 인접행렬 M을 이용
+ 대각선 성분은 모두 0
+ 무방향 그래프
  - 인접 행렬이 대칭
  
```
if(간선 (i, j)가 그래프에 존재){
    M[i][j] = 1, 또는 true 
}
else{  
    M[i][j] = 0, 또는 false 
}
```

#### 인접 행렬 그래프 구현
```
#include <stdio.h>
#include <iostream>

using namespace std;

class AdjMatGraph{

protected:
    int size;
    char vertices[MAX_VTXS];
    int adj[MAX_VTXS][MAX_VTXS];
     
public:
    AdjMatGraph(){ reset(); }
    char getVertex(int i){ return vertices[i]; }
    int getEdge(int i, int j){ return adj[i][j]; }
    void setEdge(int i, int j, int val){ adj[i][j] = val; }
    bool isEmpty(){ return size==0; }
    bool isFull(){ return size>=MAX_VTXS; }

    void reset() {
        size=0;
        
        for(int i=0; i<MAX_VTXS; i++){
            for(int j=0; j<MAX_VTXS; j++){
                setEdge(i,j,0);
            }    
        }
    }
     
    void insertVertex( char name ){
        if( !isFull() ) vertices[size++] = name;
        else printf("Error: 그래프 정점 개수 초과\n");
    }
     
    // 무방향 그래프 간선 삽입(방향 그래프, 가중치 그래프에서는 수정)
    void insertEdge( int u, int v ){
        setEdge(u,v,1);
        setEdge(v,u,1);   // 방향 그래프에서는 <u,v>만 존재
    }
    
    void display( FILE *fp = stdout){
        fprintf(fp, "%d\n", size);
	
        for(int i=0 ; i<size; i++){
            fprintf(fp,"%c ", getVertex(i));
	          
            for(int j=0; j<size; j++){
                fprintf(fp, " %3d", getEdge(i,j));
            }   
            fprintf(fp,"\n");
        }
    }
};

void main(){
    AdjMatGraph g;
    
    for(int i=0; i<4; i++)
        g.insertVertex('A'+i);
    
    g.insertEdge(0,1);
    g.insertEdge(0,3);
    g.insertEdge(1,2);
    g.insertEdge(1,3);
    g.insertEdge(2,3);
    printf("인접 행렬로 표현한 그래프\n");
    g.display();
}

```

#### 인접 리스트
+ 각 정점이 연결 리스트를 가짐
+ 인접한 정점들을 연결리스트로 표현

#### 인접 리스트 구현
```
#include <stdio.h>
#include <iostream>

using namespace std;

class Node{

protected:
    int id;
    Node* link;
    
public:
    Node(int i, Node *l=NULL) : id(i), link(l){}
    ~Node(){
        if( link != NULL ) delete link;
    }
    
    int getId(){ return id; }
    Node* getLink(){ return link; }
    void setLink( Node* l ){ link = l; }
};

class AdjListGraph{

protected:
    int size; 
    char vertices[MAX_VTXS]; 
    Node* adj[MAX_VTXS]; 
    
public:
    AdjListGraph() : size(0){}
    ~AdjListGraph(){ reset(); }
    
    void reset(void){
        for(int i=0; i<size; i++)
            if( adj[i] != NULL ) delete adj[i];
    }
    
    void insertVertex( char val ){
        if( !isFull() ){
            vertices[size] = val;
            adj[size++] = NULL;
        }
        else printf("Error: 그래프 정점 개수 초과\n");
    }
    
    void insertEdge( int u, int v ){
        adj[u] = new Node (v, adj[u]);
        adj[v] = new Node (u, adj[v]); // 방향 그래프 주석 처리함
    }
    
    void display(){
	      printf("%d\n", size); 
	      
        for(int i=0; i<size; i++){ 
	          printf("%c ", getVertex(i));
	
            for(Node *v=adj[i]; v != NULL; v=v->getLink()){
                printf(" %c", getVertex(v->getId()) );
            }
            // printf("%3d", v->getId());
	          printf("\n");
        }
    }
    
    Node* adjacent(int v){ return adj[v]; }

void main(){
    AdjListGraph g;

    for(int i=0; i<4; i++)
        g.insertVertex('A'+i);
        
    g.insertEdge(0,1);
    g.insertEdge(0,3);
    g.insertEdge(1,2);
    g.insertEdge(1,3);
    g.insertEdge(2,3);
    
    printf("인접 리스트로 표현한 그래프\n");
    g.display();
}
```
<br/>

### 그래프 탐색
#### DFS(깊이 우선 탐색)
+ 한 방향으로 갈 수 있을 때까지 가다가 더 이상 갈 수 없게 되면 가장 가까운 갈림길로 돌아와서 이 곳으로부터 다른 방향으로 다시 탐색 진행
+ 되돌아가기 위해서는 스택 필요
	- 순환함수 호출로 묵시적인 스택 이용

#### DFS 구현(인접행렬)
```
#include <stdio.h>
#include <iostream>
#include "SrchAMGraph.h"

using namespace std;

class SrchAMGraph : public AdjMatGraph{
    bool visited[MAX_VTXS];
    
public:
    void resetVisited(){
	for(int i=0; i<size; i++) visited[i] = false;
    }
    
    bool isLinked(int u, int v){ return getEdge(u,v) != 0; }

    void DFS( int v){
	visited[v] = true;	
	printf("%c ", getVertex(v));

	for(int w=0; w<size; w++){
	    if( isLinked(v,w) && visited[w]==false )
	    	DFS( w );
        }
    }
};
```

#### BFS(너비 우선 탐색)
+ 시작 정점으로부터 가까운 정점을 먼저 방문하고 멀리 떨어져 있는 정점을 나중에 방문하는 순회 방법
+ 큐를 사용하여 구현

#### BFS 구현(인접 행렬)
```
#include <stdio.h>
#include <iostream>
#include "AdjMatGraph.h”
#include “CircularQueue.h” 

void BFS( int v){
    visited[v] = true;
    
    printf("%c ", getVertex(v));

    CircularQueue que;
    que.enqueue( v );

    while(!que.isEmpty()){
        int v = que.dequeue();
        
	for(int w=0; w<size; w++){
            if( isLinked(v,w) && visited[w]==false ){
                visited[w] = true;
                printf("%c ", getVertex(w));
                que.enqueue(w);
	    }
        }
    }
}
```

#### 연결 성분
DFS 또는 BFS 반복 이용하여 최대로 연결된 부분 그래프들을 구함
```
class ConnectedComponentGraph : public SrchAMGraph{
    int label[MAX_VTXS]; 
    
public: 
    void labelDFS( int v, int color ){
	visited[v] = true;
	label[v] = color;
	
	for(int w=0; w<size; w++){
	    if( isLinked(v,w) && visited[w]==false )
		labelDFS( w, color );
	}
    }
    void findConnectedComponent(){
	int count = 0;
	
	for(int i=0; i<size; i++){
	    if( visited[i]==false)
		labelDFS(i, ++count);
	}

	printf("그래프 연결성분 개수 = = %d\n", count);
	
	for(int i=0; i<size; i++){
	    printf( "%c=%d , getVertex(i), label[i] ); 
	}
	printf( "\n" );
    }
};
```

#### 신장 트리 알고리즘
+ 모든 정점들이 연결되어야 하고 사이클을 포함하면 안됨
+ 신장 트리는 n-1개의 간선을 가짐
+ 최소의 링크를 사용하는 네트워크 구축 시 사용

<br/>
<br/>

## [ 화상 강의 토론 ]

<br/>
<br/>

## [ 11주차 수업 소감 ]
