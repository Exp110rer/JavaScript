'use strict'

class Product{
    constructor(name, category, price){
        this.name = name;
        this.category = category;
        this.price = price;
    }
}

let computer = new Product('HP', 'computers', 75000);
let printer = new Product('Xerox', 'printers', 30000);
let monitor = new Product('Samsung', 'monitors', 15000);

let product_list = [computer, printer, monitor];

let mainProductWindow = document.querySelector('.product');

const products = document.createElement('div');
products.style.width = '900px';
products.style.display = 'flex';
products.style.justifyContent = 'space-evenly';
products.style.flexWrap = 'wrap';
mainProductWindow.appendChild(products);

for(let product of product_list){
    const card = document.createElement('div');
    card.style.cssText = "width: 200px; height: 200px; margin-top: 30px; border-radius: 10%; background-color:white; box-shadow: 5px 10px 20px rgb(127, 183, 235); border: 1px solid black;"
    card.insertAdjacentHTML('afterbegin',`<h3 style="text-align: center">${product['name']}</h3> <h4>${product['category']}</h4> <h5>Цена: ${product['price']} рублей.</h5>`);
    products.appendChild(card);


}




