function slojenie(a, b){
    return a+b;
}

function vichitanie(a, b){
    return a-b;
}

function umnojenie(a, b){
    return a*b;
}

function delenie(a, b){
    if (b !=0) {
        return a/b;
    }
    else{
        return NaN;
    }
}

function mathOperation(a, b, operation){
    switch(operation){
        case '+':
            return slojenie(a, b);
        case '-':
            return vichitanie(a, b);
        case '*':
            return umnojenie(a, b);
        case '/':
            return delenie(a, b);
        default:
            return NaN;
    }
}

console.log(mathOperation(1, 2, '+'));
console.log(mathOperation(2, 1, '-'));
console.log(mathOperation(10, 12, '*'));
console.log(mathOperation(3,2, '/'));
console.log(mathOperation(1, 2, 'www'));