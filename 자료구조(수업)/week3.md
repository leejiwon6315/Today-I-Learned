# Week3
> 스택

## [ 온라인 강의 내용 ]
### 스택
+ 쌓아 놓은 더미
+ 후입 선출(LIFO : Last-In First-Out)

#### 스택의 구조
+ 스택 상단 : top
+ 스택 하단 : 불필요
+ 요소, 항목
+ 삽입/삭제 연산

#### 스택 추상 자료형
Stack ADT
<br/>
<br/>
객체
+ 후입 선출(LIFO)의 접근 방법을 유지하는 요소들의 모음<br/>

연산
+ `push(x)` : 주어진 요소 x를 스택의 맨 위에 추가
+ `pop()` : 스택이 비어있지 않으면 맨 위에 있는 요소를 삭제
+ `isEmpty()` : 스택이 비어있으면 참(true)을 아니면 거짓(false)을 반환
+ `peek()` : 스택이 비어있지 않으면 맨 위에 있는 요소를 삭제하지 않고 반환
+ `isFull()` : 스택이 가득 차 있으면 참(true)을 아니면 거짓(false)을 반환
+ `size()` : 스택 내의 모든 요소들의 개수를 반환
+ `display()` : 스택 내의 모든 요소들의 출력

#### 배열을 이용한 스택의 구현
1차원 배열
+ top : 가장 최근에 입력되었던 자료를 가리키는 변수
+ stack[0]..stack[top] : 먼저 들어온 순으로 저장
+ 공백상태라면 top은 -1

#### 스택 클래스 설계
```
inline void error(char *message){
  // 에러 메세지 함수
  printf("%s\n", message);
  exit(1);
}

const int MAX_STACK_SIZE = 20;
class ArrayStack{
  int top;                    // 요소의 개수(스택의 맨 마지막 번째 요소)
  int data[MAX_STACK_SIZE];   // 배열(스택)의 크기
  
  public:
    ArrayStack(){             // 생성자
      top = -1;               // 소멸자
    }
    ~ArrayStack(){}
    
    bool isEmpty(){
      return top == -1;
    }
    
    bool isFull(){
      return top == (MAX_STACK_SIZE - 1) ;
    }
    
    void push(int e){
      if(isFull()){
        error(" 스택 포화 에러 ");
      }
      data[++top] = e;  // data의 맨 마지막의 다음요소에 e 삽입
    }
    
    int pop(){
      if(isEmpty()){
        error(" 스택 공백 에러 ");
      }
      return data[top--];
    }
    
    int peek(){
      if(isEmpty()){
        error(" 스택 공백 에러 ");
      }
      return data[top];
    }
    
    void display(){
      printf("[스택 항목의 수 = %2d] ==> %2d", top + 1);
      for(int i=0; i<=top; i++){
        printf("<%2d>", data[i]);
      }
      printf("\n");
    }
}
```

#### 스택 구현의 다른 방법
연결리스트 : 배열은 사이즈를 항상 정해주어야 하기 때문에 수정이 어렵다. 연결 리스트를 사용하면 동적을 스택의 사이즈를 수정할 수 있음 
<br/>
<br/>

## [ 화상 강의 토론 ]


<br/>

## [ 3주차 수업 소감 ]

