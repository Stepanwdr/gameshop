import {SET_CURRENT_GAME} from "../action/game";

const initialState = []

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_CURRENT_GAME: {
            const {game} = action.payload
            return {
                ...state,
                game
            }
        }
        default: {
            return state
        }
    }
}