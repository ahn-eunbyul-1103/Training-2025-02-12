const qs = require('querystring'); // 라이브러리 패키지

const student = {
  name : "안은별",
  age : 30,
  home : "대전"
}
// 쿼리스트링 테스트
// 한글은 인코딩 문제만 해결하면 풀릴 거 같은데..?
const test = qs.stringify(student);
// console.log(test);

const testString = "name=%EC%95%88%EC%9D%80%EB%B3%84&age=30&home=%EB%8C%80%EC%A0%84";
const work = qs.parse(testString);
console.log(work);