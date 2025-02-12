# 🌤️주요 학습 내용
### 👾git에 대해서 (파일에는 예제 담겨있지 않음)
`git config` : 시스템당 최초 한 번 정도는 명시하는게 중요 (외우진 않아도 됨 😊)

- 변경사항을 기록할 준비를 할께
    
    → 기록하고 싶지 않은 파일도 있기 때문에 `선별하는 과정`이 있음 (=`스테이징`)
    
    ① `git add 파일` : 기록할 파일을 선정<br>
    ② `git commit -m “ 기록에 대한 내용 “` : 내용을 메세지로 담아서 커밋
### ❓객체는 반복문 못 쓸까?
`for … in` : ~안에, for문을 약간 변형한 아종 (객체 전용 반복문)<br>
`for … of` : ~중에
### 📄자주 쓰이는 객체 메서드

      const first = Object.keys(obj); // key 값만 뽑아와서 배열을 만듦
      const second = Object.values(obj); // value 값만 뽑아와서 배열을 만듦
      const third = Object.entries(obj); // key와 value를 묶은 이중배열이 됨

### 📙querystring 라이브러리에 대해서
객체를 한 줄의 문자열로 만드는 작업으로써 노드 라이브러리 중의 하나이다.<br>
`query` : 질의하다 → 뭐 좀 쿼리할려고, 뭐 좀 물어보려고<br>
`string` : 문자들의 배열<br>
⇒ 즉, **글자로 뭔가 주문을 할 수도 있다**.
