const obj = {
  a : "안은별",
  b : "박준배",
  c : "두부"
}

const first = Object.keys(obj); // 배열이 됨
console.log(first);

for(let a in obj) {
  console.log(a[first[0]]);
}