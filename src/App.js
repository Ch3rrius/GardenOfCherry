import React, { useState } from 'react';
import YearFilter from './components/YearFilter';
import GamesGrid from './components/GamesGrid';
import { games } from './data';
import './App.css';

const App = () => {
  const [selectedYear, setSelectedYear] = useState("All");

  const filteredGames = selectedYear === "All"
  ? games.slice().sort((a, b) => a.name.localeCompare(b.name)) // Sort alphabetically for "All"
  : games
      .filter(game => game.yearsPlayed.includes(selectedYear)) // Filter by year
      .sort((a, b) => a.name.localeCompare(b.name)); // Sort alphabetically

  return (
    <div className="webapp">
      <h1 style={{ textAlign: 'center' }}>THE GARDEN OF CHERRY</h1>
      <h3 style={{ textAlign: 'center' }}>
          A historical catalog of all the games streamed on   
          <a href="https://twitch.tv/cherrius_" target="_blank" rel="noreferrer" style={{ color: '#9146FF' }}> Twitch</a> or 
          <a href="https://youtube.com/cherrius" target="_blank" rel="noreferrer" style={{ color: '#FF0000' }}> Youtube</a>
      </h3>

      <div className="app">
        <YearFilter
          // Generate years dynamically as needed from data.js, sorted ascending (2017, 2018, etc)
          years={["All", ...[...new Set(games.flatMap(game => game.yearsPlayed))].sort((a, b) => a - b)]}
          selectedYear={selectedYear}
          onYearChange={setSelectedYear}
        />
        <GamesGrid games={filteredGames} />
      </div>
      </div>
  );
};

export default App;
