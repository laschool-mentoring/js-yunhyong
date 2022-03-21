// 1. 배열과 인덱스
// Array(어레이), index(인덱스)

// 과일을 저장
const apple = "사과";
const banana = "바나나";

// 상위 변수 하나에 모든 변수 저장
const fruit = ['사과', '바나나', '체리'];

console.log(fruit[0]);
console.log(fruit[2]);

// 2. 연산자
console.log(1+2);

// 3. 할당 연산자
let x = 1;
let y = x;

// 4. 조건문과 비교 연산자 else if
const name = "최윤형";

if (name == "최윤형") {
    console.log("최윤형입니다");
} else {
    console.log("최윤형이 아닙니다");
}

// switch(조건) {case : 1 }

const number = 1
switch(number)
{
    case 1 : console.log("숫자가 1입니다");
    break;
    case 2 : console.log("숫자가 2입니다");
    break;
    default:
        console.log("아무것도 아닙니다");
}

// 5. 반복문 for
/*
 for (초기값; 조건; 증가식) {
    명령문


}
*/

for (let i = 0; i < 3; i++){
    console.log("반복문");
    console.log("1");
}

// 1 ~ 1000까지 더하기

let sum = 0;
for (let i = 1; i <= 1000; i++) {
    sum +=i;
}

console.log(sum);

// 구구단 만들기
for (let i = 0; i <= 9; i++) {
    for (let j = 1; j<= 9; j++) {
        console.log(i + " X " + j + " = " + (i*j));
    }
    console.log("-------------");
}

