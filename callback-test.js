function plus(number, append) {
  return number + append;
}

function minus(number, append) {
  return number - append;
}

function divide(number, append) {

  return number / append;

}
function remain(number, append) {
  return number % append;
}

function operator(number, append, callback) {
  let a = number;
  let b = append;
  return callback(a, b);

}

console.log(operator(1504, 209, remain));
