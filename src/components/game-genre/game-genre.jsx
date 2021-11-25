import React from 'react';
import "./game-genre.scss"
const GameGenre = ({genre}) => {
    return (
        <span className={"game-genre"}>
            {genre}
        </span>
    );
};

export default GameGenre;