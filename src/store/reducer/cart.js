import {ADD_ITEM_TO_CART, DELETE_ITEM_FROM_CART,} from "../action/cart";


const initialState = {
    itemsInCart:[]
}


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM_TO_CART: {
            const {item} = action.payload
            state.itemsInCart.push(item)
            return {
                ...state,
            }
        }
        case DELETE_ITEM_FROM_CART: {
            const {id} = action.payload
            let items
            const {itemsInCart}=state
            items=itemsInCart.filter(item=>item.id !==id)
            console.log(itemsInCart)
            return {
                ...state,
                itemsInCart:items
            }
        }
        default: {
            return state
        }
    }
}