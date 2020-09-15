"use strict"

let num = 50;

// цикл 1 //

while (num <= 55) {
    console.log(num);
    num++;
}

// цикл 2 //

do {
    console.log(num);
    num++;
}
while (num < 55);

// цикл 3 //

//a//

for ( let i = 1; i < 8; i++) {  //если 'i < 0' -это бесконечный цикл//
    console.log(i);
}

//b//

for (let i = 1; i < 10; i++) {
    if (i === 6){
        break;
    }
    console.log(i);

}

//c//
for (let i = 1; i < 10; i++) {
    if (i === 6){
        continue;
    }
    console.log(i);

}