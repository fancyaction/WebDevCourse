function isEven (num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}

function factorial (num) {
    var j = 1;
    for (var i = 1; i <= num; i++) {
        j *= i;
        console.log (j);
    }
    return j;
}

function kebabToSnake (str) {
    return str.replace (/-/g , "_");
}
