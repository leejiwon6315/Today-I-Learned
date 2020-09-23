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
+ `pop()` : 스택이 비어있지 않으면 맨 위에 있는 요소를 삭제후 반환
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

<br/>

### 스택 응용
#### 괄호검사
괄호검사 알고리즘 개요 : <br/>
문자열에서 한 문자(char) 씩 읽어 [, {, ( 를 만났을 때 스택에 push 한다. <br/>
문자열을 읽으면서 ), }, ] 가 나오면 스택에 쌓인 순서대로 비교, 쌍이 맞으면 `pop()`한 후 다음 단계로 넘어간다.<br/>
문자열 마지막까지 쌍이 맞으면 `True` 를 반환하고, 중간에 쌍이 맞지 않으면 즉시 `False` 를 반환한다.
```
bool CheckMatching(char* filename){

  int nLine = 1, nChar = 0;
    ArrayStack stack;
    char ch;

    while ( (ch = getc(fp)) != EOF ) {
	    if( ch == '\n' ){
        nLine++;
      }
	    nChar++;
        
      if( ch == '[' || ch == '(' || ch == '{' ){
        stack.push(ch);
      }
      
      else if( ch == ']' || ch == ')' || ch == '}' ) {
        int prev = stack.pop();
        if( ( ch == ']' && prev != '[' ) || ( ch == ')' && prev != '(' ) || ( ch == '}' && prev != '{' ) ){
          break;
        }
      }
    }
    
    fclose(fp);
    
    printf("[%s] 파일 검사결과:\n", filename );
    
    if( !stack.isEmpty() ){
	    printf("Error! (라인수=%d, 문자수=%d)\n\n", nLine,nChar );
    }
    
    else{
	    printf("  OK: (라인수=%d, 문자수=%d)\n\n", nLine,nChar);
    }
      
    return stack.isEmpty();
}
```

####  후위표기 수식 계산
+ 스택에 저장할 내용 : 연산항 -> 실수
+ 입력 처리 : `ungetc()` 함수를 활용
```
double calcPostfixExpr( FILE *fp = stdin ){
  char c;
  double val;
  OperandStack st;
  
  while ( (c=getc(fp)) != '\n' ){
	  if( c=='+' || c=='-' || c=='*' || c=='/' ){
	    double val2 = st.pop();
	    double val1 = st.pop();
      
	    switch( c ){
		    case '+': st.push( val1 + val2); break;
		    case '-': st.push( val1 - val2); break;
		    case '*': st.push( val1 * val2); break;
		    case '/': st.push( val1 / val2); break;
	    }
	  }
	  else if (c>='0' && c<='9'){
	    ungetc( c, fp );          // getc로 읽어온 마지막 문자를 다시한번 읽어옴
	    fscanf( fp, "%.1f", &val );
	    st.push( val );
	  }
  }
  
  return (st.pop());
}
```

####  후위표기 변환
```
int precedence( char op ){
  switch (op) {
		case '(' : case ')' : return 0; 
		case '+' : case '-' : return 1;
		case '*' : case '/' : return 2;
	}
	return -1;
}

void infix2Postfix( FILE *fp = stdin ){
  char c, op;
  double val;
  ArrayStack st;

  while ( (c=getc(fp)) != '\n' ){
  
    if ((c>='0' && c<='9')) {
	    ungetc( c, fp );
	    fscanf( fp, "%lf", &val );
	    printf("%4.1f ", val);
    }
	  else if( c=='(' ){
      st.push( c );
    }
	  else if( c==')' ){
	    while (!st.isEmpty()) {
		    op = st.pop();
		    if( op== '(' ){
          break;
        }
		    else{
          printf( "%c ", op );
        }  
	    }
    }
    else if( c=='+' || c=='-' || c=='*' || c=='/' ){
	    while ( !st.isEmpty() ){
		    op = st.peek();
		    if ( precedence(c) <= precedence(op) ){
		      printf( "%c ", op );
		      st.pop();
		    }
		    else break;
    	}
    	st.push( c );
	  }
  }
  
  while (!st.isEmpty()){
    printf( "%c ", st.pop() );
  }
}

```

## [ 화상 강의 토론 ]
이번 주 팀 리더가 준비해온 정리, 상세 설명을 들었음.<br/>
풀지 못했던 퀴즈 문제나 답이 애매한 문제들을 팀원들과 상의해서 결론을 냄.

<br/>
<br/>

## [ 3주차 수업 소감 ]
스택으로 생각보다 많은 것을 구현할 수 있었던 것 같다. DFS는 그동안 알고리즘 문제들을 보면서 재귀 함수로 구현하는 법 만을 알고 있었는데, <br/>
구조체를 활용하여 스택으로도 구현 할 수 있었다는 것이 신기했다. 사실 생각해보면 쉽게 적용할 수 있었던 이슈였는데, 사고가 너무 한쪽으로 굳어진 느낌이다. <br/>
해답을 바로 찾아보는 것이 아닌, 고민 후에 먼저 풀어보고 해답을 보는 방법을 쓰도록 노력해야겠다. 
