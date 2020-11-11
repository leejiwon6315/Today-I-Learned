# week7-Quiz
> 개인적으로 생각해 본 정답이기 때문에 오답이거나 다른 해답이 있을 수 있습니다. <br/>

<br/>

## Q8.
문제의 보기 그림은 교재 'c++로 쉽게 풀어쓴 자료구조'의 연습문제에 표기되어 있습니다.


### 1. 다음 트리에 대한 중위 순회 결과는?
1. A B D C E F
2. A B C D E F
3. D B E C F A
4. D B A E C F
> 4번, 중위 순회는 왼쪽 노드 -> 루트 -> 오른쪽 노드 순서

<br/>

### 2. 다음 트리를 전위 순회로 운행할 경우 다섯 번째로 탐색되는 것은?
1. C
2. E
3. G
4. H
> 2번, 루트 -> 왼쪽 노드 -> 오른쪽 노드

<br/>

### 3. 그림과 같은 이진트리를 후위 순회한 결과는?
1. `+ * * / A B C D E`
2. `A / B * C * D + E`
3. `+ * A B / * C D E`
4. `A B / C * D * E +`
> 4번, 후위 순회는 자식 노드에서부터 탐색 

<br/>

### 4. 다음 트리에서 단말 노드 수는?
1. 2
2. 3
3. 4 
4. 8
> 3번 4, 단말 노드는 자식 노드가 없는 노드

<br/>

### 5. 다음 그림에서 트리의 차수는?
1. 3
2. 4
3. 6
4. 8
> 3번, 노드들 중 최대 차수가 트리의 차수 

<br/>

### 6. 다음 그림에서 트리의 차수와 단말 노드의 개수는?
1. 트리의 차수 : 4, 단말 노드 : 4
2. 트리의 차수 : 2, 단말 노드 : 4
3. 트리의 차수 : 4, 단말 노드 : 8
4. 트리의 차수 : 2, 단말 노드 : 8
> 2번


<br/>

## C8
### 트리의 순회결과(전위, 중위, 후위, 레벨)와 전체 노드수, 단말노드 개수, 트리의 높이를 출력하는 코드를 작성하세요.
```
void setRoot(BinaryNode* node){
  root = node;
}
    
BinaryNode* getRoot(){
  return root;
}

bool isEmpty(){
  return root==NULL;
}

int getCount(){
  // 전체 노드 수
  return isEmpty() ? 0 : getCount(root);
}

int getSubCount(){
  // 하위 노드 수
  return isEmpty() ? 0 : getLeafCount(root);
}

int getHeight(){
  // 트리의 높이
  return isEmpty() ? 0 : getHeight(root);
}

void inorder(){
  // 중위 순회
  printf("\n inorder: ");
  inorder(root);
}

void preorder(){
  // 전위 순회
  printf("\n  preorder: ");
  preorder(root);
}

void postorder(){
  // 후위 순회
  printf("\n postorder: ");
  postorder(root);
 }
    
void levelorder(){
  // 레벨 
  printf("\nlevelorder: ");
  
  if(!isEmpty()) {
    CircularQueue q;
    q.enqueue( root );
    
    while(!q.isEmpty()){
      BinaryNode* n = q.dequeue();
      
      if( n != NULL ) {
        printf(" [%c] ", n->getData());
        q.enqueue(n->getLeft ());
        q.enqueue(n->getRight());
      }
    }
  }
}
```
