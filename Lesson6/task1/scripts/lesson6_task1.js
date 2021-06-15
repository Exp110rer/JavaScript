'use strict'

class Product{
    constructor(productID, name, description, price){
        this.productID=`p${productID}`;
        this.name=name;
        this.description=description;
        this.price=price;
        this.image = `${name}_1.png`;
    }
}

let computer = new Product(101, 'Computer', 'Personal computer', 75000);
let monitor = new Product(102, 'Monitor', 'Personal monitor', 15000);
let printer = new Product(103, 'Printer', 'Personal printer', 25000);
let keyboard = new Product(104, 'Keyboard', 'Personal keyboard', 1000);
let mouse = new Product(105, 'Mouse', 'Personal mouse', 700);

const productList = [computer,monitor,printer,keyboard,mouse];

function addElementToPage(product, paretnElement){
    let newElement = document.createElement('div');
    newElement.style.width = '300px';
    newElement.style.height = '300px';
    newElement.style.backgroundColor = 'white';
    newElement.style.display = 'flex';
    newElement.style.flexDirection = 'column';
    newElement.style.justifyContent = 'space-around';
    newElement.style.alignItems = 'center';
    newElement.setAttribute('id', product.productID);

    let newElementTitle = document.createElement('h3');
    newElementTitle.textContent = product.name;
    newElementTitle.style.color = 'darkblue';
    newElement.appendChild(newElementTitle);

    let newElementImage = document.createElement('img');
    newElementImage.setAttribute('src', `images/${product.image}`);
    newElementImage.style.width = '50%'
    newElement.appendChild(newElementImage);

    let newElementPrice = document.createElement('h4');
    newElementPrice.textContent = `Цена: ${product.price} рублей.`;
    newElementPrice.style.color = 'darkblue';
    newElement.appendChild(newElementPrice);

    let newElementDescription = document.createElement('h6');
    newElementDescription.textContent = product.description;
    newElementDescription.style.color = 'green';
    newElement.appendChild(newElementDescription);

    let newElementAddToCard = document.createElement('h3');
    newElementAddToCard.textContent = 'ADD TO BASKET';
    newElementAddToCard.setAttribute('data-type', 'addtobasket');
    newElementAddToCard.setAttribute('data-id', product.productID);
    newElement.appendChild(newElementAddToCard);


    paretnElement.appendChild(newElement);

}

let body = document.querySelector('.body');
let basket = document.querySelector('.basket');

let basketStatus = [0, 0];

for(let item of productList){
    addElementToPage(item, body);
}

function addElementToBasket(e){
    if(e.target.dataset.type == 'addtobasket'){
        let addItemID = e.target.dataset.id;
        for(let item of productList){
            if(item.productID === addItemID){
                basketStatus[0]+=1;
                basketStatus[1]+=item.price;
                basket.textContent = `В корзине ${basketStatus[0]} товаров на сумму ${basketStatus[1]} рублей.`
                break;
            }
        }
    }
}

body.addEventListener('click', addElementToBasket);





