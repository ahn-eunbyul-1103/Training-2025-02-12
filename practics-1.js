const obj = {
  a : "안은별",
  b : "박준배",
  c : "두부"
}

const first = Object.keys(obj); // key 값만 뽑아와서 배열을 만듦
const second = Object.values(obj); // value 값만 뽑아와서 배열을 만듦

console.log(second);