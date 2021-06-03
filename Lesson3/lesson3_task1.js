let digits = [];

for(let i=0; i<101; i++){
    digits.push(i);
}



for(let i=2; i<digits.length; i++){
    if (digits[i] === 0){
        continue;
    }
    else{
        for(let ii=i+1; ii<digits.length; ii++){
            if(digits[ii] % digits[i] === 0){
                digits[ii] = 0;
            }
        }
    }
}

let prime_numbers = digits.filter(function(elem) {return elem !== 0});

console.log(prime_numbers);