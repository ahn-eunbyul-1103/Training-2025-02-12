const obj = {
  a : "안은별",
  b : "박준배",
  c : "두부"
}

const first = Object.keys(obj); // key 값만 뽑아와서 배열을 만듦
const second = Object.values(obj); // value 값만 뽑아와서 배열을 만듦
const third = Object.entries(obj); // key와 value를 묶은 이중배열이 됨

console.log(third);
console.log(third[0][0]); // * 이차원 배열 or 좌표계
console.log("----------------")
for (let i = 0; i < third[0].length; i++) {
  console.log(third[0][i]);
}