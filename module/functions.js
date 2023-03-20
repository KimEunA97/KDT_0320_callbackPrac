function one() {
  return 1;
}

function twoReturnString() {
  return "1";
}

//함수 이름 앞에 is가 붙어있으면 boolean일 확률이 높음. 암묵적인 룰
function isThree() {
  return true;
}

//호출하기 전에는 함수 호출하고 나서는 객체
function four() {

  return {
    a: 1,
    b: "2",
    c: true,
  }
}


//C언어에서는 return void라고 함
//더하는 행위만 하는 excution function = 실행만 하는 함수
//리턴을 필요로 하지 않는 동작만을 위한 함수도 존재한다.
//대표적인 게 for문, 리턴이 없다.
// DOM API 대부분은 리턴이 없다.
function five() {
  let a = 1 + 2;
}

two() === "1";

//직관적이지 않으니 디버거에 의존해야 한다.
//리턴만 알아내면 대부분의 함수를 쓸 수 있다.

