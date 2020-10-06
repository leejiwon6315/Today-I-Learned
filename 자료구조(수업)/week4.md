# Week4
> 큐

## [ 온라인 강의 내용 ]
### 큐
+ 먼저 들어온 데이터가 먼저 나가는 자료구조
+ 선입 선출(FIFO : First-In First-Out)

#### 큐 추상 자료형
Queue ADT<br/><br/>
객체
+ 선입 선출(FIFO)의 접근 방법을 유지하는 요소들의 모음

연산
+ `enqueue(e)` : 주어진 요소 e를 큐의 맨 뒤에 추가
+ `dequeue()` : 큐가 비어있지 않으면 맨 앞 요소를 삭제하고 반환
+ `isEmpty()` : 큐가 비어있으면 true를 아니면 false를 반환
+ `peek()` : 큐가 비어있지 않으면 맨 앞 요소를 삭제하지 않고 반환
+ `isFull()` : 큐가 가득 차 있으면 true을 아니면 false을 반환
+ `size()` : 큐의 모든 요소들의 개수를 반환
+ `display()` : 큐의 모든 요소들의 출력

#### 배열을 이용한 큐 : 선형 큐
배열을 선형을 사용하여 큐를 구현할 수 있다. 하지만 삽입을 계속하기 위해서는 요소들을 이동시켜야 한다.<br/>
> 원형 큐(배열을 원형으로 사용하여 큐를 구현)를 시용하여 해결

<br/>

### 원형 큐
#### 원형 큐의 구조
맨앞 요소와 맨 뒤의 요소를 관리하기 위한 2개의 인덱스가 필요
+ `front` : 첫번째 요 하나 앞의 인덱스
+ `rear` : 마지막 요소의 인덱스

#### 공백/포화상태
+ 공백상태 : `front == rear`
+ 포화상태 : `front%M == (rear+1)%M`
원형 큐에서 하나의 공간은 항상 비워둔다. <br/>
front는 맨 첫번 째 요소의 하나 앞 인덱스를 가리킨다. 만약 하나의 공간을 비워놓지 않으면 rear와 front가 같아져 공백상태인지, 포화상태인지 구분하기 어렵다.

#### 큐의 연산
+ 나머지 연산을 사용하여 인덱스를 원형으로 회전
+ 삽입 연산
```
enqueue(x)
rear <- (rear+1) % MAX_QUEUE_SIZE;
data[rear] <- x;
```

```
dequeue(x)
front <- (front+1) % MAX_QUEUE_SIZE;
return data[front];
```

#### 큐 C++ 구현
```
#define MAX_QUEUE_SIZE 100

class CircularQueue {
  protected:
    int front; 	
    int rear; 	
    int data[MAX_QUEUE_SIZE]; 

  public:
    CircularQueue(){ front = rear = 0; }
    bool isEmpty(){ return front == rear; }
    bool isFull(){ return (rear+1)%MAX_QUEUE_SIZE == front; }

    void enqueue( int val ) { 
      if( isFull() ) error(" error: 큐가 포화상태입니다\n");
      else {
        rear = (rear+1) % MAX_QUEUE_SIZE;
        data[rear] = val;
      }
    }
    
    int dequeue() { 	
      if( isEmpty() ) error(" Error: 큐가 공백상태입니다\n");
      else {
        front = (front+1) % MAX_QUEUE_SIZE;
        return data[front];
      }
    }
    
    int peek() { 		
      if( isEmpty() ) error(" Error: 큐가 공백상태입니다\n");
      else return data[(front+1) % MAX_QUEUE_SIZE];
    }
    
    void display() { 	
      printf( "큐 내용 : ");
      int maxi = (front < rear) ? rear : rear+MAX_QUEUE_SIZE;
      
      for( int i = front+1 ; i<=maxi ; i++ ){
        printf( "[%2d] ", data[i%MAX_QUEUE_SIZE]);
      }
      
      printf( "\n");
    }
};

```

<br/>

### 덱
+ Double-Ended-Queue
+ front와 rear 모두 삽입/삭제가 가능한 큐

#### 덱 추상 자료형
Deque ADT<br/><br/>
객체
+ 전단과 후단을 통한 접근을 허용하는 요소들의 모음

연산
+ `addFront(e)`: 주어진 요소 e를 덱의 맨 앞에 추가
+ `deleteFront()`: 덱이 비어있지 않으면 맨 앞 요소를 삭제하고 반환
+ `addRear(e)`: 주어진 요소 e를 덱의 맨 뒤에 추가
+ `deleteRear()`: 덱이 비어있지 않으면 맨 뒤 요소를 삭제하고 반환
+ `isEmpty()`: 큐가 비어있으면 true를 아니면 false를 반환
+ `getFront()`: 비어있지 않으면 맨 앞 요소를 삭제하지 않고 반환
+ `getRear()`: 비어있지 않으면 맨 뒤 요소를 삭제하지 않고 반환
+ `isFull()`: 덱이 가득 차 있으면 true을 아니면 false을 반환
+ `display()`: 덱의 모든 요소들의 출력

#### 덱 C++ 구현
+ 배열 사용
  - 원형 큐 클래스를 확장하여 구현 -> 원형 덱
  - 상속 기능 사용

+ 연결리스트 사용
  - 양 쪽에서 삽입/삭제가 가능해야함
  - 이중 연결리스트 사용
<br/>

```
class CircularDeque : public CircularQueue {
  public:
    CircularDeque() { }
    void addRear( int val ) { enqueue(val);} 
    int deleteFront() { return dequeue(); } 
    int getFront() { return peek(); } 

    void display() { 	
      printf( "덱의 내용 : "); 
      int maxi = (front < rear) ? rear : rear+MAX_QUEUE_SIZE;
      
      for( int i = front+1 ; i<=maxi ; i++ )
        printf( "[%2d] ", data[i%MAX_QUEUE_SIZE]);
      printf( "\n");
    }

    int getRear( ){ 
      if( isEmpty() ) error(" Error: 덱이 공백상태입니다\n");
      else return data[rear];
    }
    
    void addFront( int val ) {
      if( isFull() ) error(" error: 덱이 포화상태입니다\n");
      else {
        data[front] = val;
        front = (front-1+MAX_QUEUE_SIZE) % MAX_QUEUE_SIZE;
      }
    }
    
    int deleteRear() {
      if( isEmpty() ) error(" Error: 덱이 공백상태입니다\n");
      else {
        int ret = data[rear];
        rear = (rear-1+MAX_QUEUE_SIZE) % MAX_QUEUE_SIZE;
        return ret;
      }
    }
};
```

## [ 화상 강의 토론 ]


<br/>
<br/>

## [ 4주차 수업 소감 ]

