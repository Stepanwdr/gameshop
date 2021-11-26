export const SET_CURRENT_GAME = "SET_CURRENT_GAME"
export default function setCurrentGame(game) {
    return {
        type: SET_CURRENT_GAME,
        payload: {
            game
        }
    }
}