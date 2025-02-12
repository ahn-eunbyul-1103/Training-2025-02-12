let a = {
  title : "안은별문서입니다",
  style : "body { background-color: gray; }",
  body : "안은별 문서라구욧!"
}
// 엇, 이것도 쿼리스트링을 이용해서 문서 만들 수 있지 않을까?
// * 강사님의 긴급미션
// * 1. 간단한 객체 만들기
// * 2. 만든객체를 쿼리스트링으로 변환하기
// * 3. 변환한 쿼리스트링을 간단한 txt 파일로 저장하기
const qs = require('querystring'); // 쿼리스트링 라이브러리 불러오기
const fs = require('fs'); // 파일 만들기 위한 라이브러리 불러오기
// 간단한 객체 만들기
let info = {
  name: "안은별",
  age: 30,
  like: "라면",
  hate: "낫또",
  pet: "강아지"
}
// 만든 객체를 쿼리스트링으로 변환하기
const qsInfo = qs.stringify(info);
console.log(qsInfo);
// 변환한 쿼리스트링을 간단한 txt 파일로 저장하기
fs.writeFileSync("querystring.txt", qsInfo);