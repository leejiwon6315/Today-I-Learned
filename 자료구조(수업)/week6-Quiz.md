# week6-Quiz
> 개인적으로 생각해 본 정답이기 때문에 오답이거나 다른 해답이 있을 수 있습니다. <br/>

<br/>

## Q6.
6장_1 PPT 25페이지의 결과가 도출되도록 리스트를 단순연결리스트를 이용하여 c++로 구현하세요.
```
#include <cstdio>

using namespace std;

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

class LinkedList{
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

    Node* getEntry(int pos){
        Node* n = &org;

        for(int i=-1 ; i<pos ; i++, n=n->getLink())
            if( n == NULL ) break;

        return n;
    }

    void insert(int pos, Node *n){
        Node* prev = getEntry(pos-1);
    
        if( prev != NULL ) prev->insertNext( n );
    }

    Node* remove(int pos){
        Node* prev = getEntry(pos-1);
        return prev->removeNext();
    }
    
    int size(){
        int cnt = 0;
        
        for(Node* p=getHead(); p!=NULL;p=p->getLink()){
            cnt ++;
        }
        
        return cnt;
    }
    
    void display(){
        printf( "[전체 항목 수 = %2d] : ", size());
        
        for( Node *p = getHead() ; p != NULL ; p=p->getLink() )
            p->display();
            
        printf( "\n: ");
    }
    
    void replace(int pos, Node *n){
        insert(pos, n);
        remove(pos+1);
        
    }
};

int main(){
     LinkedList list;
     list.insert( 0, new Node(10) );
     list.insert( 0, new Node(20) );
     list.insert( 1, new Node(30) );
     list.insert( list.size(), new Node(40) );
     list.insert( 2, new Node(50) );
     list.display();
     list.remove( 2 );
     list.remove(list.size()-1);
     list.remove(0);
     list.replace(1, new Node(90));
     list.display();
     list.clear();
     list.display();
    
    return 0;
}

```


## C6
### 단순연결리스트를 이용한 리스트 구현 코드를 확장하여, 다음의 연산들을 추가하고 아래 실행결과와 같도록 한다.
1) 연결 리스트의 모든 노드의 순서를 반대로 바꾸는 다음 연산을 구현하라<br/>
  `void reverse();`

2) 다른 리스트 객체 that의 노드 정보를 현재 리스트에 병합하는 다음 연산을 구현라. 이 연산후 that 리스트는 공백 리스트가 되어야 한다. <br/>
  `void merge(LinkedList* that);`
