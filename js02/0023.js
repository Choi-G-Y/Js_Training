// 논리 연산자
// AND 논리 연산자 &&
console.log(true && true);
console.log(true && false);
console.log('문장' == '문장' && 5 ==5);
console.log(5 == 5 && '다른 문장 1' == '다른 문장 2');

// 1.T 2.F 3.T 4.F

// OR 논리 연산자 ||
console.log(true || false);
console.log(false || false);
console.log('문장' == '문장' || 5 == 10);

// 1.T 2.F. 3.T

// NOT 논리 연산자 !
console.log(!true);
console.log(!false);
console.log(!5);
console.log(!'문장');
console.log(!!5);
console.log(!!'문장');

// 1.F 2.T 3.F 4.F 5.T 6.T !!두번으로 부정한 결과를 true로 바꿈.