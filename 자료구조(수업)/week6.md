# Week6
> 리스트

## [ 온라인 강의 내용 ]
### 리스트
순서를 가진 항목들의 모임

#### 리스트의 구조
+ 선형 구조
+ 임의의 위치에서 삽입 삭제가 가능

#### 리스트의 연산
기본 연산
+ 리스트의 어떤 위치에 새로운 요소를 삽입
+ 리스트의 어떤 위치에 있는 요소를 삭제
+ 리스트의 어떤 위치에 있는 요소를 반환
+ 리스트가 비었는지를 살핌
+ 리스트가 가득 차있는지를 체크
<br/>

고급 연산
+ 리스트에 어떤 요소가 있는지를 살핌
+ 리스트의 어떤 위치에 있는 요소를 새로운 요소로 대치
+ 리스트 안의 요소의 개수를 카운트
+ 리스트 안의 모든 요소를 출력

#### 리스트
데이터
+ 임의의 접근 방법을 제공하는 같은 타입 요소들의 순서 있는 모임
<br/>

연산
+ `insert(pos, item)`: 리스트의 pos 위치에 새로운 요소 item을 삽입
+ `delete(pos)`: 리스트의 pos 위치에 있는 요소를 삭제
+ `getEntry(pos)`: 리스트의 pos 위치에 있는 요소를 반환
+ `isEmpty()`: 리스트가 비어있는지를 검사
+ `isFull()`: 리스트가 가득 차 있는지를 검사
+ `find(item)`: 리스트에 요소 item이 있는지를 살핌
+ `replace(pos, item)`: pos 위치에 있는 요소를 새로운 요소 item으로 바꿈
+ `size()`: 리스트안의 요소의 개수를 반환
+ `display()`: 리스트안의 모든 요소들을 출력

#### 리스트 구현 방법
배열
+ 구현이 간단
+ 삽입, 삭제시 오버헤드
+ 항목의 개수 제한
<br/>

연결리스트
+ 구현이 복잡
+ 삽입, 삭제가 효율적
+ 크기가 제한되지 않음

#### 배열로 구현한 리스트
```
#include <cstdio>
#define MAX_LIST_SIZE 100;

class ArrayList {
    int data[MAX_LIST_SIZE]; 
    int length; 
public:
    ArrayList(void){ length=0; }

    void insert( int pos, int e ){
        if( !isFull() && pos >= 0 && pos<=length ) {
           for( int i=length ; i>pos ; i-- )
                data[i] = data[i-1]; // 뒤로 한 칸씩 밀고
                data[pos] = e; // pos에 e를 복사하고
                length++; // 리스트 항목의 개수 증가
         }
         else error("포화상태 오류 또는 삽입 위치 오류");
    }
    
    void remove( int pos ){
        if( !isEmpty() && 0<=pos && pos<length ) {
            for(int i=pos+1 ; i<length ; i++ )
                data[i-1] = data[i];
            length--;
        }
        else error("공백상태 오류 또는 삭제 위치 오류");
    }

    int getEntry(int pos){ return data[pos]; }
    
    bool isEmpty(){ return length==0; }
    
    bool isFull(){ return length==MAX_LIST_SIZE; } 
    
    bool find( int item ){
        for( int i=0 ; i<length ; i++ )
            if( data[i] == item ) return true;
        return false;
    }
    
    void replace( int pos, int e ){ data[pos] = e; }
    
    int size(){ return length; }
    
    void display(){
        printf( "[배열로구현한리스트 전체 항목 수 = %2d] : ", size() );
        
        for( int i=0 ; i<size() ; i++ )
            printf( "[%2d] ", data[i]);
        printf( "\n");
    }
    
    void clear(){ length=0; }
};
```

#### 연결리스트로 구현한 리스트
단순 연결리스트 사용
+ 하나의 링크 필드를 이용하여 연결
+ 마지막 노드의 링크 값은 NULL
+ 헤드 노드: 포인터 변수가 아니라 Node 객체

```
class Node {
    Node* link;
    int data;
public:
    Node( int val=0 ) : data(val), link(NULL){}
    
    Node* getLink(){ return link; }
    
    void setLink(Node* next){ link=next; }
    
    void display(){ printf(" <%2d>", data); }
    
    bool hasData(int val){ return data == val; }
    
    void insertNext( Node *n ){
	      if( n != NULL ) {
       	    n->link = link;
	          link = n;
	      }
    }
    
    Node* removeNext() {
	      Node* removed = link;
        
	      if( removed != NULL ) link = removed->link;
        
	      return removed;
    }
};

class LinkedList {
    Node org;
public:
    LinkedList(): org(0) {}
    ~LinkedList() { clear(); }

    Node* getHead(){ return org.getLink(); }
    bool isEmpty(){ return getHead()==NULL; }

    void clear(){
	    while(!isEmpty())
	      delete remove(0);
    }

    Node* getEntry(int pos) {
        Node* n = &org;

        for(int i=-1 ; i<pos ; i++, n=n->getLink())
            if( n == NULL ) break;

        return n;
    }

    void insert(int pos, Node *n) {
	      Node* prev = getEntry(pos-1);
	
        if( prev != NULL ) prev->insertNext( n );
    }

    Node* remove(int pos) {
	      Node* prev = getEntry(pos-1);
	      return prev->removeNext();
    }
    
    void display( ) {
        printf( "[전체 항목 수 = %2d] : ", size());
        
        for( Node *p = getHead() ; p != NULL ; p=p->getLink() )
            p->display();
            
        printf( "\n:);
    }
};
```
