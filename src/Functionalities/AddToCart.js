export function addToCart(item){
    item.cart.push(item); //pushes item object in array
    console.log(`Added ${item.name} to cart!`); //prints the necessary prompt in the console.
}