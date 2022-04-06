let sum = 0;
for (let i = 1; i < 1001; i++) {
    sum = sum + i;
}
console.log(sum);

let sum1 = 0;
let j = 1;
while(j < 1001) {
    sum1 = sum1 + j;
    j++;
}
console.log(sum1);

for(let k = 1; k < 10; k++) {
    for(let l = 1; l < 10; l++) {
        console.log(k + " X " + l + " = " + k*l);
    }
    if ( k == 3 ) break;
}

// function add(x) {
//     let sum = 0; 
//     for(let i = 1; i <= x; i++) {
//         sum = sum + i;  
//     }
//     console.log(sum);
// }

// add(6);

function GGD(x) {
    for(let i = 1; i <= x; i++) {
        for(let j = 1; j<= x; j++) {
            console.log(i + " X " + j + " = " + i*j);
        }
    }
}

GGD(15)

const add = (x) => {
    let sum = 0; 
    for(let i = 1; i <= x; i++) {
        sum = sum + i;  
    }
    console.log(sum);
}

add(10)