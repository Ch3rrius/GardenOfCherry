import React from 'react';
import GameCard from './GameCard';
import '../GamesGrid.css';

const GamesGrid = ({ games }) => {
  return (
    <div className="games-grid">
      {games.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
};

export default GamesGrid;
