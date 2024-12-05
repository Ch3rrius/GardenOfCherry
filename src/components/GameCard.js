import React from 'react';
import '../GameCard.css';

const GameCard = ({ game }) => {
  return (
    <a
      className="game-card"
      href={game.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={game.image} alt={game.name} />
      {/*<div className="game-name">{game.name}</div>*/}
    </a>
  );
};

export default GameCard;
