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

console.log(slojenie(1,2));
console.log(vichitanie(2,1));
console.log(umnojenie(10,12));
console.log(delenie(3,4));
console.log(delenie(1,0));
