"use strict";

function Product(product_id, name, description, price){
    this.product_id = product_id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.images = [`${name}_1.png`, `${name}_2.png`, `${name}_3.png`];
    this.productHTML = `<div class="product_card">
        <h1>${name}</h4>
        <img src="images/${this.images[0]}" alt="Computer" class="product_card__image" data-productidcard = "${product_id}">
        <h4>${description}</h4>
        <h2>${price} rub</h4>
        <input type="button" value="Add to cart" class="product_card__button" data-productidbutton = "${product_id}">
    </div>`;
    this.addToPage = function(parentElement) {parentElement.insertAdjacentHTML('beforeend',this.productHTML)};
}

function renderProducts(productList, parentElement){
    for(let item of productList){
        item.addToPage(parentElement);
    }
}

function addProductToCart(product_id){
    if (Object.keys(cartList).includes(String(product_id))){
        cartList[product_id] +=1;
    }
    else{
        cartList[product_id] = 1;
    }
    updateLocalStorage();
    renderCart();
}

function clearCart(){
    cartList = {};
    updateLocalStorage();
    renderCart();
}

function updateLocalStorage(){
    cartSaved.setItem('internetShop', JSON.stringify(cartList));
}

function renderCart(){
    let cartHTML = '';
    if(Object.keys(cartList).length == 0){
        cartHTML = `<div class="cart"> <h3 class="cart_text">Корзина пуста</h3> </div> </div>`;
    }
    else{
        let cartQuantity = 0;
        for (let item of Object.keys(cartList)){
            cartQuantity += cartList[item];
        }
        let cartAmount = 0;
        for(let item of Object.keys(cartList)){
            cartAmount += productList.find(product => product.product_id == item).price * cartList[item];
        }
        cartHTML = `<div class="cart"> <h3 class="cart_text">В корозине товаров: ${cartQuantity}</h3> <h3 class="cart_text">Нa сумму: ${cartAmount} рублей</h3> <input type="button" value="Clear cart" class="cart_clear_button"></div>`;
    }
    $main.insertAdjacentHTML('beforeend', cartHTML);
}

function getImageGallery(galleryProductID){
    return productList.find(product => product.product_id == galleryProductID).images;
}

function renderImageGallery(galleryProductID, index=0){
    document.querySelector('.gallery_image').setAttribute('src', `images/${getImageGallery(galleryProductID)[index]}`);
}

function main(){
    renderProducts(productList, $main);
    renderCart();
}

function mainEventHandler(e){
    if (e.type == 'click' && e.target.getAttribute('class') == 'product_card__button'){
        addProductToCart(e.target.dataset.productidbutton);
    }
    else if(e.type == 'click' && e.target.getAttribute('class') == 'cart_clear_button'){
        clearCart();
    }
    else if(e.type == 'click' && e.target.getAttribute('class') == 'product_card__image'){
        galleryImageIndex = 0;
        $gallery.style.display = 'flex';
        galleryProductID = e.target.dataset.productidcard;
        renderImageGallery(galleryProductID);
    }
    else{
        $gallery.style.display = 'none';
    }
}

function galleryImageNext(){
    if(galleryImageIndex < 2){
        renderImageGallery(galleryProductID,++galleryImageIndex);
    }
    else{
        renderImageGallery(galleryProductID,galleryImageIndex);
    }
}

function galleryImagePrev(){
    if(galleryImageIndex > 0){
        renderImageGallery(galleryProductID,--galleryImageIndex);
    }
    else{
        renderImageGallery(galleryProductID,galleryImageIndex);
    }
}

function galleryEventHandlerClick(e){
    e.stopPropagation();
    if(e.type == 'click' && e.target.dataset.action == 'prev'){
        galleryImagePrev();
    }
    else if(e.type == 'click' && e.target.dataset.action == 'next'){
        galleryImageNext();
    }
}

function galleryEventHandlerEscapeKey(e){
    if(e.key == 'Escape'){
        $gallery.style.display = 'none';
    }
}

function galleryEventHandlerMoveKey(e){
    if(e.key == 'ArrowRight' && $gallery.style.display == 'flex'){
        galleryImageNext();
    }
    else if(e.key == 'ArrowLeft' && $gallery.style.display == 'flex'){
        galleryImagePrev();
    }
}

function renderCartView(){
    console.log('234');
}

let computer = new Product(101, 'Computer', 'Personal computer', 75000);
let monitor = new Product(102, 'Monitor', 'Personal monitor', 15000);
let printer = new Product(103, 'Printer', 'Personal printer', 25000);
let keyboard = new Product(104, 'Keyboard', 'Personal keyboard', 1000);
let mouse = new Product(105, 'Mouse', 'Personal mouse', 700);

let galleryProductID = '';
let galleryImageIndex = 0;
const productList = [computer,monitor,printer,keyboard,mouse];
const $main = document.querySelector('.main');
const $gallery = document.querySelector('.gallery');
const $cartview = document.querySelector('.cart_view');
const $cart_view_next_button = document.querySelector('.cart_view_next_button');
const $address = document.querySelector('.address');
const $address_close_button = document.querySelector('.address_close_button');
const cartSaved = window.localStorage;
var cartList = cartSaved.getItem('internetShop') == null ? {} : JSON.parse(cartSaved.getItem('internetShop'));


main();
const $cart = document.querySelector('.cart');
$main.addEventListener('click', mainEventHandler);
$gallery.addEventListener('click', galleryEventHandlerClick);
$cart.addEventListener('click', function() {$cartview.style.display = 'flex'})
document.addEventListener('keydown', galleryEventHandlerEscapeKey);
document.addEventListener('keydown', galleryEventHandlerMoveKey);
$cart_view_next_button.addEventListener('click', function() {$cartview.style.display = 'none'; $address.style.display = 'flex';})
$address_close_button.addEventListener('click', function() {$address.style.display = 'none'});





