// let 반복문 입문
let hometown = [
    {name: '광용', city: '안산'},
    {name: '과요', place: '강릉', city: '강원도'},
    {name: '광요', place: '삼척', city: '감자국' },
    {name: '과용', placey: '임원', city: '감자나라'}
];

let isHometown = function(h, name) {
    console.log('함수가 실행되었습니다. ${h..city} 도시에 ${name}을 찾습니다.');


if (h.name === name) {
    console.log('${h.name}의 고향은 ${h.city} ${h.place} 입니다.');
    return true;
}
 return false;
}

let h;
while (h = hometown.shift()) {
    if (!h.name || !h.place || !h.city) continue;

    let result = isHometown(h, '광용');
    if (result) break;
}
let i = 0;
let names = ['복숭아', '귤', '토마토', '수박'];
let cities = ['청주', '제주', '예산', '해미'];

do{
    hometown[i] = {name: names[i], city: cities[i]};
    i++;
} while (i < 4);

console.log(hometown);
