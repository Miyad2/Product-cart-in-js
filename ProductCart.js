const cart = [
 {name:"Shirt", price:500, quantity:2},
 {name:"Pant", price:1000, quantity:1},
 {name:"Shoes", price:1500, quantity:1}
];

// Showing the total price of each product according to the quantity
var productPrice = cart.map(function(value){
   return value.price * value.quantity
})
console.log(productPrice)

// Showing the grand total of all products
var grandTotal = cart.reduce((prev, curr)=>{
return prev + curr.price * curr.quantity
},0)
console.log(grandTotal)


// Showing all products with price and quantity
cart.forEach((value)=>{
    var allProducts = `Product Name ${value.name} - Price ${value.price} - Quantity ${value.quantity}`
    console.log(allProducts)
})
