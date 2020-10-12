# week5-Quiz
> 개인적으로 생각해 본 정답이기 때문에 오답이거나 다른 해답이 있을 수 있습니다. <br/>

<br/>

## Q5.

### 1. 다음과 같은 문장이 실행되면 i 값은 얼마인가?
```
int i=10;
int* p;
p = &i;
*p = 8;
```
> 8, 정수 10이 들어있는 i의 주소를 p가 가리킨다. p가 가리키는 주소안의 값인 i를 8로 바꾼것.   
<br/>

### 2. 다음과 같은 문장을 수행하고 난 뒤의 a[0] 값은?
```
void sub(int b[]){
  b[0] = 0;
}

void main(){
  int a[] = {1, 2, 3, 4, 5, 6};
  sub(a);
}
```
> 0, sub()함수는 배열의 0번째 원소를 0으로 바꾼다. sub()함수에 배열 a가 들어가 a[0]가 0이 되었다.
<br/>

### 3. 단순 연결 리스트의 노드들을 노드 포인터 p로 탐색하고자 한다. p가 현재 가리키는 노드에서 다음 노드로 가려면 어떻게 하여야 하는가?
1. `p++;` <br/>
2. `p--;` <br/>
3. `p=p->link;` <br/>
4. `p=p->data;` <br/>
> 3번
<br/>

### 4. 덱(deque: double-ended queue)은 삽입과 삭제가 양끝에서 임의로 수행되는 자료구조이다. 다음 그림과 같이 단순 연결 리스트(singly linked list)로 덱을 구현해야 한다고 할 때 O(1) 시간 내에 수행 할 수 없는 연산은?
1. insertFirst 연산 : 덱의 첫 번째 원소로 삽입
2. insertLast 연산 : 덱의 마지막 원소로 삽입
3. deleteFirst 연산 : 덱의 첫 번째 원소를 삭제
4. deleteLast 연산 : 덱의 마지막 원소를 삭제
> 2번, top을 새로운 원소에 연결. 새로운 원소의 다음 링크를 첫번째 원소였던 노드에 연결. 총 두번의 연산이 수행된다.
<br/>

### 5. 다음은 연결 리스트를 이용하여 스택을 표현한 것이다. 이에 대한 설명을 옳지 않은 것은?
top->[b| ]->[c| ]->[d| ] <br/>
(a) push 연산 수행 전 스택<br/><br/>
top->[a| ]->[b| ]->[c| ]->[d| ] <br/>
(b) push 연산 수행 후 스택<br/><br/>
1. 스택에 가장 최근에 입력된 자료는 top이 지시한다.<br/>
2. 스택에 입력된 자료 중 d가 가장 오래된 자료이다.<br/>
3. (b)에서 자료 c를 가져오려면 pop 연산이 2회 필요하다<br/>
4. (a)에서 자료의 입력된 순서는 d, c, b 이다.<br/>
> 3번, pop이 3회 필요함. pop은 삭제 뿐만 아니라, 가장 마지막 원소를 반환함.

<br/>
<br/>

## C5.
### C5_1. 5장_1 PPT 15-17페이지에 있는 2차원 배열 코드를 이해하고 실행하세요.
```
#include <iostream>

using namespace std;

int** alloc2DInt(int rows, int cols){
    if( rows <= 0 || cols <= 0 ) return NULL;
    
    int** mat = new int* [ rows ];
    
    for (int i=0; i<rows; i++){
        mat[i] = new int [cols];
    }
    
    return mat;
}

void free2DInt( int** mat, int rows){
    if( mat != NULL ){
        
        for( int i=0 ; i<rows ; i++ ){
            delete [] mat[i];
        }
        
        delete [] mat;
    }
}

void set2DRandom( int **mat, int rows, int cols){
    for( int i=0; i<rows; i++ ){
        for( int j=0; j<cols; j++ ){
            mat[i][j] = rand()%100;;
        }
    }
}

void print2DInt( int **mat, int rows, int cols){
    cout << "행의 수 = "<< rows <<" 열의 수 = " << cols << "\n";
    
    for (int i=0 ; i<rows ; i++ ){
        for (int j=0 ; j<cols ; j++ ){
            cout << "( " << mat[i][j] << " ) ";
        }
        cout << "\n";
    }
}


int main(){
    
    int** mat;
    int rows, cols;

    cout << "행과 열을 입력 하시오 \n";
    cin >> rows >> cols;

    mat = alloc2DInt( rows, cols );
    
    set2DRandom( mat, rows, cols );
    print2DInt( mat, rows, cols );
    free2DInt( mat, rows);
    
    return 0;
}
```
<br/>

### C5_2. 연결리스트로 스택을 구현하세요(5장_2 PPT 2-5페이지와 첨부된 C5 자료 참고)
```
#include <iostream>

#define MAX_STRING 100

using namespace std;

class Student{
    int id;
    char name[MAX_STRING];
    char dept[MAX_STRING];
    
public:
    Student(int i=0, char* nam="", char* dep=""){
        set( i, nam, dep );
    }
    
    void set(int i, char* nam, char* dep){
        id = i;
        strcpy( name, nam );
        strcpy( dept, dep );
    }
    
    void display(){
        cout<< "학번 : " << id << ",  이름 : " << name << ",  학과 : " << dept << "\n";
    }
};

class Node : public Student{
    Node* link; // 다음 노드를 가리키는 포인터 변수
    
public:
    Node( int id=0, char* name="", char* dept="")
        : Student(id, name, dept) {
            link = NULL;
        }
    
    ~Node(void){}
    
    Node* getLink(){    // link가 private로 선언되어 있어 접근하기 위해 get으로 link를 가져옴
        return link;
    }
    
    void setLink( Node *p ){    // 외부에서 link에 접근
        link = p;
    }
};

class LinkedStack{
    Node* top;
public:
    LinkedStack(){
        top = NULL;       //top을 초기화해줌
    }
    ~LinkedStack(){
        while(!isEmpty()) delete pop();
    }
    
    bool isEmpty(){
        return top == NULL;
    }
    
    void push( Node *n ){
        if(top == NULL) top = n;
        else{
            n -> setLink(top);  // n의 다음 노드가 top
            top = n;    // top을 n으로 바꿔줌;
        }
    }
    
    Node* pop(){
        if(isEmpty()) return NULL;
        
        Node *p = top;
        top = top->getLink();   // top의 다음 노드를 top으로 설정
        
        return p;
    }
    
    Node* peek(){
        return top;
    }
    
    void display(){
        cout << "[LinkedStack]\n";
        
        for(Node *p=top; p!=NULL; p=p->getLink()){
            p-> display();
        }
        cout << "\n";
    }
};

int main(){
    
    LinkedStack stack;
    stack.push( new Node(2015130007, "lee", "media") );
    stack.push( new Node(2015130100, "kim", "computer") );
    stack.push( new Node(2015130135, "park", "soft") );
    stack.display();

    Node *node = stack.pop();
    
    cout << "[Pop 항목]\n";
    
    node->display();
    
    cout << "\n";
    
    delete node;
    stack.display();
    return 0;
}
```
<br/>

### C5_3. 연결리스트로 큐를 구현하세요(5장_2 PPT 6-11페이지와 첨부된 C5 자료 참고)
```
#include <iostream>

using namespace std;

class Node{
    Node* link;
    int data;
    
public:
    Node( int val=0)
        : data(val), link(NULL) {}
    
    
    Node* getLink(){    // link가 private로 선언되어 있어 접근하기 위해 get으로 link를 가져옴
        return link;
    }
    
    void setLink( Node *next ){    // 외부에서 link에 접근
        link = next;
    }
    
    void display(){
        cout << "<" << data << ">";
    }
};


class LinkedQueue
{
    Node*    front;
    Node*    rear;
public:
    LinkedQueue(): front(NULL), rear(NULL) {}
    ~LinkedQueue(){
        while(!isEmpty()) delete dequeue();
    }
    
    bool isEmpty(){
        return front == NULL;
    }

    void enqueue (Node* n){
        if(isEmpty()) front = rear = n;
        else{
            rear -> setLink(n); // rear의 다음 노드가 n
            rear = n;   // rear를 n으로 교체
        }
    }

    Node* dequeue(){
        if(isEmpty()) return NULL;
        
        Node *p = front;
        front = front->getLink();
        
        if(front == NULL) rear = NULL;  // 삭제 후 연결할 다음 노드가 null 이면 rear도 null, 공백상태
        return p;
    }
    
    Node* peek (){
        return front;
    }
    
    void display(){
        cout << "[큐내용] : \n";
        
        for(Node *p=front; p!=NULL; p=p->getLink()){
            p->display();
        }
        cout << "\n";
    }
};

int main(){
    LinkedQueue que;
    
    for( int i=1 ; i<10 ; i++ ){
        que.enqueue( new Node(i) );
    }
    
    que.display();
    
    delete que.dequeue();
    delete que.dequeue();
    delete que.dequeue();
    
    que.display();
    return 0;
}
```
