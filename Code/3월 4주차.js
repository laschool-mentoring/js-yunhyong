console.log("아니다");

const name = "최윤형";
const age = 17;
console.log(name + " 멘티는 " + age + "세이다");

const fruit = ["사과", "배", "귤"];
console.log(fruit[2]);

for (let i = 0; i < 3; i++) {
    console.log("출력");
    console.log(1);
}

for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
        console.log(i + " X " + j + " = " + i*j);
    }
    if (i == 5) break;
}

// while

let i = 1;
while (i < 10) {
    let j = 1;
    while (j < 10) {
        console.log(i + " X " + j + " = " + i*j);
        j++;
    }
    i++;
}
