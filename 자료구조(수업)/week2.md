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
<br/>

### 배열의 추상 자료형
+ 배열: <index, value> 쌍의 집합
+ 인덱스가 주어지면 해당되는 요소가 대응되는 구조

<br/>

### 1차원 배열
`(자료형) 배열이름[배열크기]` 형태로 선언

#### 문자열 : 특별한 1차원 배열 char
+ `char s[10] = "game over";` s[] 한칸에 글자(char) 한개씩 들어가는 배열</br>
  ( 위 글자는 9개 이지만 맨 마지막 배열에 '\0' 가 의무적으로 들어감 )
+ char 형은 연산자를 직접 사용할 수 없음
+ `strcmp()`, `strcpy()` 를 사용

<br/>

### 2차원 배열
`(자료형) 배열이름[행크기][열크기]` 형태로 선언

<br/>

### 함수의 매개변수로서의 배열
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

## [ 화상 강의 토론 ]


<br/>

## [ 2주차 수업 소감 ]
