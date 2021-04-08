# Week2
> 배열과 클래스

## [ 온라인 강의 내용 ]
### 배열
+ 같은 형의 변수를 여러개 만드는 경우에 사용
+ 반복 코드 등에서 배열을 사용하면 효율적인 프로그래밍이 가능
```
// search max element

tmp = score[0];
for(int i=1; i<n; i++){
  if(score[i] > tmp)
    tmp = score[i];
}
```

#### 배열의 추상 자료형
+ 배열: <index, value> 쌍의 집합
+ 인덱스가 주어지면 해당되는 요소가 대응되는 구조

#### 1차원 배열
`(자료형) 배열이름[배열크기]` 형태로 선언

#### 문자열 : 특별한 1차원 배열 char
+ `char s[10] = "game over";` s[] 한칸에 글자(char) 한개씩 들어가는 배열</br>
  ( 위 글자는 9개 이지만 맨 마지막 배열에 '\0' 가 의무적으로 들어감 )
+ char 형은 연산자를 직접 사용할 수 없음
+ `strcmp()`, `strcpy()` 를 사용

#### 2차원 배열
`(자료형) 배열이름[행크기][열크기]` 형태로 선언

#### 함수의 매개변수로서의 배열
배열은 매개 변수 받아올 때 자동으로 포인터 형태로 참조됨
+ 변수의 전달 -> 값을 복사(call by value)
+ 배열의 전달 -> 첫 번째 항목의 주소를 전달(주소를 복사)
```
void copyArray(int a[], int b[], int len){    //  int a[] 는 int *a와 같음
  for(int i=0; i<len; i++){
    b[i] = a[i];
  }
}
```
`void copyArray()` 밖에서도 배열의 값이 유지됨

#### 배열에서의 주의사항
+ 매개 변수로 전달 할 때는 배열의 길이도 전달해야 함
+ 2차원 배열의 배개 변수 전달에서는 열의 크기를 정해주어야한다<br/>
  ( `int findMaxPixel(int a[][5], int height, int width)` )

</br>
</br>

### 구조체
+ 기존의 자료형들을 조합해 새로운 자료형을 만드는 방법
+ 타입이 다른 자료형들의 조합이 가능
+ 대입 연산자만 사용 가능(구조체 자체의 다른 연산은 불가능)

#### 구조체 정의
```
struct Student{
  int id;
  char name[5];
  double score;
};
```

#### 구조체 선언
```
Student a;
Student a = { 20152507, "이지원", 100.0 };
```

#### 구조체 멤버 접근( . 사용)
```
a.id = 12345;
a.score = 99.9;
strcpy(a.name, "LEE JEEWON");   // a.name = "LEE JEEWON" 와 같은 직접 접근은 불가(char 형이기 때문 인듯)
```

#### 구조체 비교 연산
함수 사용
```
int compare(Student a, Student b){
  return a.id - b.id;
}
```

#### 구조체와 함수
함수의 매개 변수나 반환형으로 사용이 가능(call by value)
```
void printComplex(Complex c){
  printf("%4.1f + %4.1fi\n, c.real, c.image")
}
```

<br/>
<br/>

### 클래스
C++은 소프트웨어 개발에 모듈성, 유연성, 재사용성을 높이기 위해 추상화, 캡슐화, 상속, 다형성 등의 개념을 지원

#### 객체지향 프로그래밍( OOP - Object-Oriented Programming )
+ 실세계가 객체로 구성되어 있는 것과 비슷하게 소프트웨어를 개발하고자 함
+ 상향식 프로그래밍 기법 : 작은 모듈들을 먼저 만들고, 이들을 조합하여 원하는 큰 프로그램을 개발하는 방법
+ 소프트웨어 모듈의 핵심이 클래스

#### 객체
객체는 상태와 행위를 가짐<br/>
절차 지향적 프로그래밍으로 구현 : 구조체(상태) + 함수(행위)

#### 클래스의 구현
객체 지향적 프로그래밍으로 구현<br/>
구조체 데이터와 함수들을 묶음
+ 속성 : 멤버 변수(필드)
+ 행위 : 멤버 함수(메소드)

#### 객체지향 프로그래밍의 주요 특징
+ 추상화(Abstraction)
+ 캡슐화(Encapsulation)
+ 상속(Inheritance)
+ 다형성(Polymorphism)

#### 클래스 선언
```
class ClassName{
  private:
    ...
    
  protected:
    ...
  
  public:
    ...
};
```

#### 접근 지정자
class는 기본적으로 private, struct는 public
+ private: 전용. 외부에서 접근 불가
+ protected: 보호. 자식 클래스까지 접근 허용. 외부 접근 불가
+ public: 공용. 누구나 접근 가능

#### 함수 오버로딩
같은 함수 이름을 가지고 있으나 매개변수, 리턴타입 등의 특징은 다른 여러개의 서브프로그램 생성을 가능하게 함

#### 생성자, 소멸자
Car class의 생성자와 소멸자
+ `Car(){}`
+ `~Car(){}`

#### 상속
```
class SportsCar : public Car{   // Car class를 상속 받아 SportsCar class를 선언

  public:
    bool bTurbo;
    void setTurbo(bool bTur){
      bTurbo = bTur;
    }
    
    void speedUp(){
      if(bTurbo) speed += 20;   // bTurbo가 참이라면, speed + 20 up!
      else Car::speedUp();      // 참이 아니면 Car에서 상속받은 speedUp() 실행
    }

}
```

<br/>
<br/>

## [ 화상 강의 토론 ]
팀원이 준비해 온 ppt로 강의를 다시 복습함.<br/>
서로 모르는 것에 대해 질의 응답을 하고, 개인적으로 생각하는 진로의 이야기도 함.

<br/>

## [ 2주차 수업 소감 ]
배열과 클래스에 대해 모르는 것을 알게 되었다. 파라미터로 배열을 넘길 때의 방식을 자세히 모르고 있었던 것 같다.<br/>
아직 클래스의 생성자에 대해서는 완전히 이해하지는 못한것 같다. <br/>
챌린지가 생각보다 어렵다고 느꼈는데, 해답 코드를 보니 간결하게 짜여져 있었다. 더 공부하고 유연하게 생각할 필요가 있는 것 같다. 
