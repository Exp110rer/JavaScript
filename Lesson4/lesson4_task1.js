"use strict";

function Parse_object(units, tens, hundreds){
    this.untis = units;
    this.tens = tens;
    this.hundreds = hundreds;
}

function parse_number(user_input){
    user_input = parseInt(user_input);
    if(isNaN(user_input)){
        console.log('Input value is not a number.')
        return new Parse_object();
    }
    else if(user_input > 999){
        console.log('Input has more than 3 digits.')
        return new Parse_object();
    }
    else{
        return new Parse_object(parseInt(user_input%100%10), parseInt(user_input%100/10), parseInt(user_input/100));
    }
}

let user_input = prompt('Введите 3х значное число: ');

let fianal_obj = parse_number(user_input);

console.log(fianal_obj);
