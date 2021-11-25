export function calcTotalPrice(itemsInCart){
   return itemsInCart.reduce((acc,game)=>acc+=game.price,0)
}
