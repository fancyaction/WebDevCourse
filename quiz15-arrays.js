var array1 = ["a","b","c"];
var array2 = [1,1,1,1];

function printReverse (array) {
    for (i = array.length - 1;i >= 0; i--) {
        console.log (array[i]);
    }
}

function isUniform (array) {
    for (i = 1; i < array.length; i++) {
        if (array[0] !== array[i]) {
            return false;    
        }
        return true;
    }
}

function sumArray(array) {
    var sum = 0;
    array.forEach(function (el){
        sum+= el;
});
    return sum;
    // for (i = array.length - 1;i >= 0; i--) {
    //     sum+= array[i]; 
    // }
    // console.log (sum);
}

function max(array) {
    var maxNum = 0;
    array.forEach(function(number,i) {
        if (array[i] > maxNum) {
            maxNum = array[i];
        }
    });
    return maxNum;
}
    // var maxNum = 0;
    // for (i = 0; i < array.length; i++) {
    //     if (array[i] > maxNum) {
    //         maxNum = array[i];
    //     }
    // }
    // console.log (maxNum);
// }