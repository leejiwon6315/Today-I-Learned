# week9-Quiz
> 개인적으로 생각해 본 정답이기 때문에 오답이거나 다른 해답이 있을 수 있습니다. <br/>

<br/>

## Q9.
### 1. 이진트리에서 높이가 5일 때, 이 트리는 최대 몇 개의 노드를 가질 수 있는가?
1. 26개
2. 8개
3. 32개
4. 31개
> 4번, 높이가 h : 최소 h개 ~ 최대 2^h-1 개의 노드

<br/>

### 2. 다음의 전위 순회와 중위 순회 결과를 생성할 수 있는 이진트리를 그려라
전위 순회 : A, B, D, E, C, F, G, H <br/>
중위 순회 : E, D, B, A, G, F, H, C
```
       A
     /   \
    B     C
   /     /
  D     F
 /     / \
E     G   H
```

<br/>

### 3. 정수 데이터가 이진 탐색 트리에 저장되어 있다. 이러한 이진 탐색 트리가 공백 상태로부터 다음과 같은 순서로 연산이 실행된다. 연산들에 의해 생성되는 이진 탐색 트리를 순서대로 그려라
1. 삽입 5, 7, 2, 8, 3
2. 삭제 3
3. 삽입 4, 3
4. 삭제 7
5. 삭제 5
```
// 1번, 삽입 5, 7, 2, 8, 3

       5
     /   \
    2     7
     \     \
      3     8
```
```
// 2번, 삭제 3

       5
     /   \
    2     7
           \
            8
```
```
// 3번, 삽입 4, 3

       5
     /   \
    2     7
     \     \
      4     8
     /
    3
```
```
// 4번, 삭제 7

       5
     /   \
    2     8
     \  
      4     
     /
    3
```
```
// 5번, 삭제 5

       8
     / 
    2 
     \  
      4     
     /
    3
```


<br/>

## C9
### 이진탐색트리를 만들고, 노드 9의 삭제 전후의 레벨 순회 결과를 출력하는 코드를 작성하세요.
```
#include "BinSrchTree.h"
#include <cstdio>

class BinSrchTree :public BinaryTree {

    public:
          BinSrchTree(void){ }
          ~BinSrchTree(void){ }


    BinaryNode* searchRecur(BinaryNode* n, int key){
        if(n == NULL) return NULL;   
        
        if(key == n->getData()) return n;
        else if(key < n->getData()) return searchRecur(n->getLeft(), key);
        else return searchRecur(n->getRight(), key);
    }

    void insertRecur(BinaryNode* r, BinaryNode* n){
        if(n->getData() == r->getData()) return;
        else if (n->getData() < r->getData()){
            if (r->getLeft() == NULL) r->setLeft(n);
            else insertRecur(r->getLeft(), n);
        }
        else{
            if(r->getRight() == NULL) r->setRight(n);
            else insertRecur(r->getRight(), n);
        }
    }

    void remove(int data){
        if (isEmpty()) return;

        BinaryNode* parent = NULL;
        BinaryNode* node = root;
        
        while(node != NULL && node->getData() != data){
            parent = node;
            node = (data < node->getData()) ? node->getLeft() : node->getRight();
        }
        if(node == NULL){
            printf(" Error: key is not in the tree!\n");
            return;
        }
        else remove(parent, node);
    }

    void remove(BinaryNode* parent, BinaryNode* node){
        
        if(node->isLeaf()){
        // case 1
            if(parent == NULL) root = NULL;
            else{
            
                if(parent->getLeft() == node) parent->setLeft(NULL);
                else parent->setRight(NULL);
            }
        }
        
        else if(node->getLeft() == NULL || node->getRight() == NULL){
        // case 2
            BinaryNode* child = (node->getLeft() != NULL) ? node->getLeft() : node->getRight();
            if(node == root) root = child;
            else{
                if(parent->getLeft() == node) parent->setLeft(child);
                else parent->setRight(child);
            }
        }

        else{
        // case 3
            BinaryNode* succp = node;
            BinaryNode* succ = node->getRight();
            
            while(succ->getLeft() != NULL){
                succp = succ;
                succ = succ->getLeft();
            }

            if(succp->getLeft() == succ) succp -> setLeft(succ->getRight());
            else succp->setRight(succ->getRight());

            node -> setData(succ->getData());
            node = succ;
        }
        
        delete node;
    }
};

int main()
{
    BinSrchTree tree;

    BinaryNode* n2 = new BinaryNode('2', NULL, NULL);
    BinaryNode* n4 = new BinaryNode('4', NULL, NULL);
    BinaryNode* n6 = new BinaryNode('6', NULL, NULL);
    BinaryNode* n8 = new BinaryNode('8', NULL, NULL);
    BinaryNode* n1 = new BinaryNode('1', NULL, n2);
    BinaryNode* n3 = new BinaryNode('3', n1, n4);
    BinaryNode* n7 = new BinaryNode('7', n6, n8);
    BinaryNode* n9 = new BinaryNode('9', n7, NULL);
    BinaryNode* n5 = new BinaryNode('5', n3, n9);


    tree.setRoot(n5);
    printf("노드 9 삭제 전 레벨 순회");
    tree.levelorder();
    printf("노드 9 삭제 후 레벨 순회");
    tree.remove('9');
    tree.levelorder();
}
```
