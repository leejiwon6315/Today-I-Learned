## 함수 인자는 2개 이하가 이상적
만약 다수의 인자를 사용해야 한다면, 객체를 이용
#### 안 좋은 예
```
function createMenu(title, body, buttonText, cancellable) {
  // ...
}
```
#### 좋은 예
```
function createMenu({ title, body, buttonText, cancellable }) {
  // ...
}

createMenu({
  title: 'Foo',
  body: 'Bar',
  buttonText: 'Baz',
  cancellable: true
});
```
<br/>

## 함수는 한번에 1가지 동작만을 시행
소프트웨어 엔지니어링에서 가장 중요한 규칙이다. 함수가 2개이상의 작업을 한다면, 코드의 수정과 테스트 등이 복잡해지고 이해하기도 어려워진다.
#### 안 좋은 예
```
function emailClients(clients) {
  clients.forEach(client => {
    const clientRecord = database.lookup(client);
    if (clientRecord.isActive()) {
      email(client);
    }
  });
}
```
#### 좋은 예
```
function emailClients(clients) {
  clients
    .filter(isClientActive)
    .forEach(email);
}

function isClientActive(client) {
  const clientRecord = database.lookup(client);
  return clientRecord.isActive();
}
```
<br/>

## 함수명은 그 함수가 어떤 함수인지 명확하게 표현해야함
#### 안 좋은 예
어떤 값을 추가하는 함수인지 정확히 알 수 없음
```
function AddToDate(date, month) {
  // ...
}

const date = new Date();
AddToDate(date, 1);
```
#### 좋은 예
```
function AddMonthToDate(date, month) {
  // ...
}

const date = new Date();
AddMonthToDate(date, 1);
```
<br/>

## 함수명은 단일 행동을 추상화 해야함
#### 안 좋은 예
함수는 한번에 하나의 기능만을 수행해야한다. 함수명에 여러 이름이 내포되어있다면 잘못설계된 것.
```
function parseBetterJSAlternative(code) {
  const REGEXES = [
    // ...
  ];

  const statements = code.split(' ');
  const tokens = [];
  REGEXES.forEach(REGEX => {
    statements.forEach(statement => {
      // ...
    });
  });

  const ast = [];
  tokens.forEach(token => {
    // lex...
  });

  ast.forEach(node => {
    // parse...
  });
}
```
#### 좋은 예
함수들을 나누어서 재사용이 가능학 테스트가 용이하게끔 만들어야한다.
```
function tokenize(code) {
  const REGEXES = [
    // ...
  ];

  const statements = code.split(' ');
  const tokens = [];
  REGEXES.forEach(REGEX => {
    statements.forEach(statement => {
      tokens.push( /* ... */ );
    });
  });

  return tokens;
}

function lexer(tokens) {
  const ast = [];
  tokens.forEach(token => {
    ast.push( /* ... */ );
  });

  return ast;
}

function parseBetterJSAlternative(code) {
  const tokens = tokenize(code);
  const ast = lexer(tokens);
  ast.forEach(node => {
    // parse...
  });
}
```
<br/>

<br/>

#### 출처
https://edu.goorm.io/lecture/20119/번역판-clean-code-javascript
<br/>
Robert C. Martin's 'Clean Code'
