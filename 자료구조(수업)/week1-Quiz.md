# week1-Quiz
개인적으로 생각해 본 정답이기 때문에 오답이거나 다른 해답이 있을 수 있습니다. <br/>

<br/>

### 1. 선형 구조만으로 나열된 것은?
1. 트리, 그래프
2. 트리, 그래프, 스택, 큐
3. 트리, 배열, 스택, 큐
4. 배열, 스택, 큐
> 4번 - 배열, 스택, 큐는 추상적으로 한줄로 나열(?)된 선형 구조

<br/>

### 2. 자료 구조의 성격이 나머지 셋과 다른 하나는?
1. 큐
2. 그래프
3. 데크
4. 리스트
> 2번 그래프 - 선형 구조가 아님

<br/>

### 3. Set(집합) 추상 데이터 타입을 정의하라. 다음과 같은 연산자들을 포함시켜라
` Create, Insert, Remove, Is_In, Union, Intersection, Difference ` 
> Create(): 집합 A를 생성한다. <br/>
> Insert(A, a): 집합 A에 원소 a를 저장한다. <br/>
> Remove(A, a): 집합 A에서 원소 a를 제거한다. <br/>
> Is_In(A, a): 집합 A에서 원소 a가 있는지 확인한다. <br/>
> Union(A, B): 집합 A와 집합 B의 합집합을 구한다. <br/>
> intersection(A, B): 집합 A와 B의 교집합을 구한다. <br/>
> Difference(A, B): 집합 A와 B의 차집합을 구한다. <br/>

<br/>

### 4. 시간 복잡도 함수 n^2+10n+8을 빅오 표기법으로 나타내면?
1. O(n)
2. O(nlon2n)
3. O(n^2)
4. O(n^2log2n)
> 3번 O(n^2)

<br/>

### 5. 다음의 빅오 표기법들을 수행 시간이 적게 걸리는 것부터 나열하라
` O(1), O(n), O(logn), O(n^2), O(nlogn), O(n!), O(2^n)`
> O(1), O(logn), O(n), O(nlogn), O(n^2), O(2^n), O(n!)

<br/>

### 6. 다음 알고리즘의 시간 복잡도를 n에 대한 함수로 나타내고, 빅오 표기법으로도 나타내라.
```
int algorithm(int n){
  int k=0;     
  while(n>1){    
    n = n/2;    
    k++;        
  }
  return k;     
}
```
> n에 대한 함수 : 2k-1 = n <br/>
> 시간 복잡도 : O(log2n)

<br/>

### 7. 빅오 표기법의 정의를 사용하여 다음을 증명하라.
`3n^2 + 10n + 2 = O(n^2)` <br/>
> n=10, C=5일때, 300 + 100 + 2 <= 500 임으로 참이다.

<br/>

### 8. sub 함수의 시간복잡도가 O(n)일 때 다음 문장의 시간 복잡도는?
```
for(I=0; I<n; I*=2)
	sub()
```
> O(nlogn)

<br/>

### 9. 배열에 정수가 들어있다고 가정하고 다음 작업의 최악, 최선의 시간 복잡도를 빅오 표기법으로 말하라
1. 배열의 n번째 숫자를 화면에 출력한다.
2. 배열안의 숫자 중에서 최솟값을 찾는다.
3. 배열의 모든 숫자를 더한다.
> 1. 최악 : O(n), 최선 : O(n) <br/>
> 2. 최악 : O(n), 최선 : O(1) - `less<int>` 로 정렬되어 있는 경우 가장 앞 요소가 최솟값이 때문 <br/> 
> 1. 최악 : O(n), 최선 : O(n) <br/>

<br/>
<br/>

## C1. n을 n번 더하는 문제 구현하기
### 1장_2 PPT 5페이지에 있는 3가지 알고리즘을 구현하고, n에 따른 시간복잡도를 실험하여, 이론적 시간복잡도와 일치하는지 비교하세요.

#### 알고리즘A 
전체 연산수 : 2 <br/>

```
int algorithmCount(int n){
  int count = 0;	// 연산 횟수를 계산하기 위한 변수
    
  int sum = 0;
  count ++;		// count에 대입연산 횟수 계산
  sum = n*n;
  count ++;		// count에 곱셈 연산 횟수 계산

  return count;
}
```

<br/>

#### 알고리즘B 
전체 연산수 : 2n+1 <br/>

```
int algorithmCount(int n){
  int count = 0;	// 연산 횟수를 계산하기 위한 변수
    
  int sum = 0;
  count ++;		// count에 대입 연산 횟수 계산
    
  for(int i=1; i<=n; i++){
    int tmp = sum + n;	// 덧셈 연산과 대입 연산을 분리하기 위해 임의로 만든 변수 tmp
    count ++;		// count에 덧셈 연산 횟수 계산
    sum = tmp;
    count ++;		// count에 대입 연산 횟수 계산
  }
    
  return count;
}
```
<br/>

#### 알고리즘C
전체 연산수 : 2n^2+1 <br/>

```
int algorithmCount(int n){
  int count = 0;	  // 연산 횟수를 계산하기 위한 변수
    
  int sum = 0;
  count ++;		  // count에 대입 연산 횟수 계산
    
  for(int i=1; i<=n; i++){
    for(int j=1; j<=n; j++){
      int tmp = sum + 1;  // 덧셈 연산과 대입 연산을 분리하기 위해 임의로 만든 변수 tmp
      count ++;		  // count에 덧셈 연산 횟수 계산
      sum = tmp;
      count ++;		  // count에 대입 연산 횟수 계산
    }
  }
    
  return count;
}
```
