import React from 'react';
import {useSelector} from "react-redux";
import "./game-page.scss"
import GameCover from "../../components/game-cover/game-cover";
import GameGenre from "../../components/game-genre/game-genre";
import GameBuy from "../../components/game-buy/game-buy";

const GamePage = () => {
    const {game} = useSelector(state => state.game)

    if(!game){
        return null
    }
    return (
        <div className={"game-page"}>
            <h1 className="game-page__title">
                {game.title}
            </h1>
            <div className="game-page__content">
                <div className="game-page__left">
                    <iframe src={game.video}
                            width={"90%"}
                            height={"400px"}
                            frameBorder={"0"}
                            title={"YouTube Video Player"}
                    >
                    </iframe>
                </div>
                <div className="game-page__right">
                    <GameCover image={game.image}/>
                    <p className={"game-page__paragraph"}>{game.description}</p>
                    <p className={'secondary-text'}>The Favourite Tags For This Item:</p>
                    {game.genres.map(genre => <GameGenre genre={genre}/>)}
                    <div className={"game-page__buy"}>
                        <GameBuy game={game}/>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default GamePage;