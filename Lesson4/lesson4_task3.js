"use strict";

class Product{
    constructor(name, category, price_per_unit){
        this.name = name;
        this.category = category;
        this.price_per_unit = price_per_unit;
    }
    getTotalCost(){
        return this.price_per_unit * this.quantityOrdered;
    }
    addItemToBasket(quantity = 1){
        this.quantityOrdered +=quantity;
    }
    removeItemFromBasket(){
        this.quantityOrdered = (this.quantityOrdered === 0) ? this.quantityOrdered : this.quantityOrdered - 1;
    }
}

class ProductInBusket extends Product{
    constructor(name, category, price_per_unit, basketID, customer, quantityOrdered = 0){
        super(name, category, price_per_unit);
        this.basketID = basketID;
        this.customer = customer;
        this. quantityOrdered = quantityOrdered;

    }
}

let c = new ProductInBusket('HP', 'laptop', 75000, 123456789, 'user_1');

c.addItemToBasket();
c.addItemToBasket(11);
c.removeItemFromBasket();

console.log(c.getTotalCost());