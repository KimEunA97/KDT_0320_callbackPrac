function six(number, append) {
  return number + append;
}

function seven(number, append) {
  return number - append;
}

function eight(number, append, callback) {
  let a = number + 1;
  let b = append + 2;
  //인자를 전달 받는다.
  //argument를 전달 받았다.
  //매개변수 자리에 함수가 들어오는 것을 콜백함수라고 한다.
  return callback(a, b);

}

console.log(eight(1, 2, function (a, b) {
  return a + b;
}));

// console.log(eight(3, 4, seven));