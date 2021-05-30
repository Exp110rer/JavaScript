let a = parseInt(prompt('Введите число a: '))
let b = parseInt(prompt('Введите число b: '))

if (a>=0 && b>=0){
    alert('Выводим разность: ' + (a-b))
}
else if(a<0 && b<0){
    alert('Выводим произведение: ' + (a*b))
}
else{
    alert('Выводим сумму: ' + (a+b))
}