// 자료형 변환 이해

console.log("5" + 1);
console.log("5" - 1);
console.log("5" * 2);
console.log("There is" + 5);
console.log("Five" + 1);

// 1. 51, 2. 4, 3. 10, 4. There is5, 5. Five1

console.log("- 연산자를 활용한 자료형 변환");
let str = 5 + "1";
console.log(str);
console.log(typeof str);
let num = +str;
console.log(num);
console.log(typeof num);
console.log("- 함수를 활용한 자료형 변환");
str = String(num);
console.log(str);
console.log(typeof str);
num = Number(str);
console.log(num);
console.log(typeof num);
// 1. 51, 2. string, 3. 51, 4. num, 5. 51, 6. string, 7. 51, 8. number