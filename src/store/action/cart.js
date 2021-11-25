export const ADD_ITEM_TO_CART= "ADD_ITEM_TO_CART"
export  function addItemToCart(item) {
    return {
        type: ADD_ITEM_TO_CART ,
        payload: {
            item
        }
    }
}
export const DELETE_ITEM_FROM_CART="DELETE_ITEM_FROM_CART";
export  function deleteItemFromCart(id) {
    return {
        type: DELETE_ITEM_FROM_CART,
        payload: {
            id
        }
    }
}