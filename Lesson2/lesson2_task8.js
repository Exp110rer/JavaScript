function myPow(val, pow){
    if (pow == 0){
        return 1;
    }
    else if(pow == 1){
        return val;
    }
    else{
        return val*myPow(val, pow -1);
    }
}

console.log(myPow(3,3))