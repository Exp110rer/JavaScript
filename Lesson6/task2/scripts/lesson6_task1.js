'use strict'

class Product{
    constructor(productID, name, description, price){
        this.productID=`p${productID}`;
        this.name=name;
        this.description=description;
        this.price=price;
        this.image = `${name}_1.png`;
        this.images = [`${name}_1.png`,`${name}_2.png`,`${name}_3.png`];
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
    newElementImage.style.width = '50%';
    newElementImage.setAttribute('data-type', 'product_picture');
    newElementImage.setAttribute('data-id', product.productID);
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
let pictureBox = document.querySelector('.pictures_page');

let basketStatus = [0, 0];

let i = 0;

for(let item of productList){
    addElementToPage(item, body);
}

function addCommonEvent(e){
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
    else if(e.target.dataset.type == 'product_picture'){
        pictureBox.style.display = 'flex';
        pictureBox.style.justifyContent = 'space-between';
        pictureBox.style.alignItems = 'center';
        pictureBox.setAttribute('data-id', e.target.dataset.id);
        let pictureElement = pictureBox.querySelector('.picture');
        for(let item of productList){
            if(item.productID == e.target.dataset.id){
                var picture_path = `images/${item.image}`;
            }
        }
        pictureElement.setAttribute('src', picture_path);
        pictureElement.style.width = '70%';
        i = 0;
    }
    else{
        pictureBox.style.display = 'none';
    }
}

body.addEventListener('click', addCommonEvent);

function pictureBrowse(e){
    e.stopPropagation();
    if (e.target.dataset.id == 'next'){
        for (let item of productList){
            if (this.dataset.id == item.productID){
                if(i < 2){
                    i++;
                    let pictureElement = pictureBox.querySelector('.picture');
                    let picture_path = `images/${item['images'][i]}`;
                    pictureElement.setAttribute('src', picture_path);
                }
                else{
                    let pictureElement = pictureBox.querySelector('.picture');
                    let picture_path = `images/${item['images'][2]}`;
                    pictureElement.setAttribute('src', picture_path);
                }
            }

        }
    }
    else if(e.target.dataset.id == 'prev'){
        for (let item of productList){
            if (this.dataset.id == item.productID){
                if(i > 0){
                    i--;
                    let pictureElement = pictureBox.querySelector('.picture');
                    let picture_path = `images/${item['images'][i]}`;
                    pictureElement.setAttribute('src', picture_path);
                }
                else{
                    let pictureElement = pictureBox.querySelector('.picture');
                    let picture_path = `images/${item['images'][0]}`;
                    pictureElement.setAttribute('src', picture_path);
                }
            }

        }
    }
}

pictureBox.addEventListener('click', pictureBrowse);







