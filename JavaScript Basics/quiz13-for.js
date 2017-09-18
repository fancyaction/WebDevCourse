//Print all numbers between -10 and 19

for (var count = -10; count <= 19; count++) {
    console.log (count);
}

// var count = -10;

// while (count <= 19) {
//     console.log (count);
//     count++;
// }

//Print all even numbers between 10 and 40

for (count = 10; count <= 40; count++) {
   if (count % 2 == 0) {
        console.log (count);
   }
}

// count = 10;

// while (count <= 40) {
//    if (count % 2 == 0) {
//     console.log (count);
//    }
//    count++;
// }

//Print all odd numbers between 300 and 333

for (count = 300; count <= 333; count++) {
    if (count % 2 !== 0) {
         console.log (count);
    }
 }

// count = 300;

// while (count <= 333) {
//     if (count % 2 !== 0) {
//      console.log (count);
//     }
//     count++;
//  }

// //Print all numbers divisible by 5 AND 3 between 5 and 50

for (count = 5; count <= 50; count++) {
    if (count % 5 === 0 && count % 3 === 0) {
         console.log (count);
    }
 }

// count = 5;

// while (count <= 50) {
//     if (count % 5 === 0 && count % 3 === 0) {
//      console.log (count);
//     }
//     count++;
//  }