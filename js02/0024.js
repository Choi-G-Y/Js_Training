// 삼항 연산자
// IF랑 비교했을 때 조건문이 짧을 시 삼항이 더 나을 수 있다.
let condition = 5 > 10;
condition ? console.log('left') : console.log('right');
let result = condition ? (
    console.log("삼항 연산식의 첫 번째 표현식 입니다."),
    "표현식1"
) : (
    console.log("삼항 연산식의 두 번째 표현식 입니다."),
    "표현식2"
);
console.log(result);