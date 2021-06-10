"use strict";

function basket_item(name, price, quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}

let computers = new basket_item('HP', 75000, 2);
let printers = new basket_item('SAMSUNG', 15000, 7);
let routers = new basket_item('ASUS', 10000, 3);

let basket = [computers, printers, routers];
// let basket = [];

function countBasketPrice(busket){
    let total_price = 0;
    for (let i=0; i<busket.length; i++){
        total_price += busket[i].price*busket[i].quantity;
    }
    return total_price;
}

const mainWindow = document.querySelector('.basket');
let basketEl = document.createElement('div');
basketEl.style.cssText = 'padding: 20px 20px 20px 20px;'
if(basket.length){
    basketEl.textContent = `В корзине: ${basket.length} товаров на сумму ${countBasketPrice(basketEl)} рублей.`;
}
else{
    basketEl.textContent = 'Корзина пуста.'
}
mainWindow.appendChild(basketEl);
