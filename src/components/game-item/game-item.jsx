import React from 'react';
import './game-item.scss'
import GameCover from "../game-cover/game-cover";
import GameBuy from "../game-buy/game-buy";
import GameGenre from "../game-genre/game-genre";
import {useHistory} from "react-router-dom";
import {GAME_ROUTE} from "../../utils/RoutesConsts";
import {useDispatch} from "react-redux";
import setCurrentGame from "../../store/action/game";
const GameItem = ({game}) => {
    const history=useHistory()
    const dispatch=useDispatch()
    const handleClick=()=>{
        dispatch(setCurrentGame(game))
        history.push(GAME_ROUTE + `${game.title}`)
    }


    return (
        <div className={"game-item"} onClick={handleClick}>
            <GameCover image={game.image}/>
            <div className={"game-item__details"}>
                <span className={"game-item__title"}>{game.title}</span>
                <div className={"game-item__genre"}>
                  {game.genres.map(genre =><GameGenre genre={genre}/>  )}
                </div>
                <div className={"game-item__description"}>
                    {game.description.split('',55)} ...
                </div>
                <div className={"game-item__buy"}>
                   <GameBuy game={game}/>
                </div>
            </div>
        </div>
    );
};

export default GameItem;