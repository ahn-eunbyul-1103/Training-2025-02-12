const obj = {
  a : "안은별",
  b : "박준배",
  c : "두부"
}

// ! 에러남, 배열이 아니기 때문에. 가공필요
// obj.forEach((item, index) => {
//   console.log(item);
//   console.log(index);
// });

// ? -> 객체는 반복문 못 쓰나?
// * for ... in : ~안에, for문을 약간 변형한 아종(객체전용반복문)
for(let a in obj) {
  console.log(a); // key를 조회하는 친구
  console.log(obj[a]); // value를 조회하는 친구
}

console.log("-----------------");
// * for ... of : ~중에
for(let a in obj) {
  for(let b of obj[a]) {
    console.log(b); // 값을 다 뜯어서 하나하나 줌(문자 하나를 인덱스로 봄)
  }
}