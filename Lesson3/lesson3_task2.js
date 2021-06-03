basket_user = [120.32, 34.56, 100, 134,45, 17.00, 89, 123.23]

function countBasketPrice(basket){
    let total_cost = 0;
    for(let price of basket){
        total_cost+=price;
    }
    return total_cost
}

console.log(countBasketPrice(basket_user));