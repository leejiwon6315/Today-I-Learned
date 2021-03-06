# Week9
> 이진 탐색 트리

## [ 온라인 강의 내용 ]
### 이진 탐색 트리
+ 이진 트리 기반의 탐색을 위한 자료 구조
+ 효율적인 탐색 작업을 위한 자료 구조


#### 탐색 관련 용어
+ 레코드
+ 필드
+ 테이블
+ 키
+ 주요키


#### 이진 탐색 트리 정의
+ ` 왼쪽 서브트리 <= root node <= 오른쪽 서브트리 `
+ 이진 탐색을 중위 순회하면 오름차순으로 정렬 가능


#### 이진 탐색 트리 ADT
데이터<br/>
이진 탐색 트리(BST)의 특성을 만족하는 이진트리:<br/>
어떤 노드 x의 왼쪽 서브트리의 키들은 x의 키보다 작고, 오른쪽 서브트리의 키들은 x의 키보다 크다. 이때 왼쪽과 오른쪽 서브트리도 모두 이진 탐색 트리임.<br/>
<br/>
연산
+ `insert(n)` : 이진 탐색 트리의 특성을 유지하면서 새로운 노드 n을 이진 탐색 트리에 삽입
+ `remove(n)` : 이진 탐색 트리의 특성을 유지하면서 노드 n을 트리에서 삭제
+ `search(key)` : 키 값이 key인 노드를 찾아 반환


#### 탐색 연산 
다양한 방법으로 구현이 가능
```
// 재귀 함수
BinaryNode* searchRecur( BinaryNode *n, int key ){
     if(n == NULL) return NULL;
     if(key == n->getData()) return n;
     else if(key < n->getData()) return searchRecur( n->getLeft(), key );
     else return searchRecur(n->getRight(), key);
}

// 반복문
BinaryNode* searchIter( BinaryNode *n, int key ){
	while(n != NULL){ 
		if(key == n->getData()) return n;
		else if(key < n-> getData()) n = node->getLeft();
		else n = node->getRight();
	} 
	return NULL;
}

// 노드 멤버함수로 구현(재귀)
BinaryNode* BinaryNode::search( int key ){
      if(key == data) return this;
      else if (key < data && left!=NULL) return left->search(key);
      else if (key > data && right!=NULL) return right->search(key);
      else return NULL;
}
```

#### 삽입 연산 구현
+ 삽입 연산을 위해서는 먼저 탐색을 수행함
+ 탐색에 실패한 위치가 노드의 삽입 위치
```
void insertRecur( BinaryNode* r, BinaryNode* n ){
     if(n->getData() == r->getData()) return;
     
     else if(n->getData() < r->getData()){
          if(r->getLeft() == NULL) r->setLeft(n);
          else insertRecur(r->getLeft(), n);
     }
     
     else{
          if(r->getRight() == NULL) r->setRight(n);
          else insertRecur(r->getRight(), n);
     }
}
```


#### 삭제 연산
노드 삭제의 3가지 경우
+ 삭제하려는 노드가 단말 노드<br/>
  : 단말노드의 부모노드를 탐색하여 연결을 해제
+ 삭제하려는 노드가 서브트리 중 하나만 가지는 경우<br/>
  : 노드를 삭제 -> 서브트리를 부모 노드에 연결
+ 삭제하려는 노드가 두개의 서브트리를 가지는 경우<br/>
  : 가장 비슷한 값을 가진 노드를 삭제할 노드 위치로 가져옴(후계 노드 선택)


#### 삭제 연산 구현
트리의 멤버 함수로 구현
```
void remove (int data){
    if(isEmpty()) return;

    BinaryNode *parent = NULL;
    BinaryNode *node = root;
    
    while( node!=NULL && node->getData()!=data ){
      parent = node;
      node = (data<node->getData()) ? node->getLeft():node->getRight();
    }
    if(node == NULL){
	    printf(" Error: key is not in the tree!\n");
	    return;
    }
    else remove(parent, node);
}

void remove (BinaryNode *parent, BinaryNode *node){

    if( node->isLeaf() ){ 
    // case1
    
    	if( parent == NULL ) root = NULL;
    	else{
      
        if( parent->getLeft() == node )
          parent->setLeft(NULL);
        else
          parent->setRight(NULL);
        }
    }
    
    else if( node->getLeft()== NULL || node->getRight()==NULL ){
    // case2
    
	    BinaryNode *child = (node->getLeft() != NULL ) ? node->getLeft() : node->getRight();
	    
      if( node == root ) root = child;
	    else {
        if( parent->getLeft() == node ) parent->setLeft(child); 
        else parent->setRight(child); 
      }
    }
    
    else {
    // case3
    
	    BinaryNode* succp = node;
	    BinaryNode* succ = node->getRight();
      
	    while (succ->getLeft() != NULL){
	      succp = succ;
	      succ = succ->getLeft();
	    }

	  if( succp->getLeft() == succ ) succp->setLeft(succ->getRight());
	  else succp->setRight(succ->getRight());

	  node->setData(succ->getData());
	  node = succ;
  }
  delete node;
}
```

<br/>
<br/>

## [ 화상 강의 토론 ]
조장의 발표를 듣고 궁금한 것을 질문하고 이야기 하는 시간을 가졌다. <br/>
퀴즈 3번 문제에서 나는 루트노드를 삭제하는 것에 대해 오른쪽 자식의 가장 작은 값과 왼쪽 자식의 가장 큰 값 중 전자를 택하여 루트와 교체하였는데, <br/>
후자의 방법을 쓰는 것이 문제가 되는지에 대해 질문했지만 상관없는 것 같았다.

<br/>
<br/>

## [ 9주차 수업 소감 ]
트리와 마찬가지로 이진탐색트리의 이론과 실제 구현의 난이도는 조금 차이가 있는 것 같다. <br/>
개념에 대해서는 금방 이해하였지만, 실제 코드로 옮겼을 때는 조금 헷갈리는 것 같다. <br/>
그리고 루트 노드를 삭제하고 삭제한 자리에 새 노드를 교체하는 과정에서 실제 프로그래밍에서는 왼쪽 가장 큰 값과 오른쪽 가장 작은 값 중 더 합리적인 값을 판단하는 문제도 조금의 고민이 되는 것 같다. <br/>
사실 별로 큰 차이는 없겠지만 그래도 이진 트리의 구조가 바뀌는 것이기 때문이다. 조금 더 노드와 트리에 대해 공부를 해보아야 될 듯하다.
