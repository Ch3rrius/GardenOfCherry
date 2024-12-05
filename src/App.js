import React, { useState } from 'react';
import YearFilter from './components/YearFilter';
import GamesGrid from './components/GamesGrid';
import { games } from './data';
import './App.css';

const App = () => {
  const [selectedYear, setSelectedYear] = useState("All");

  // Filter games based on selected year
  const filteredGames = selectedYear === "All"
    ? games
    : games.filter(game => game.year === selectedYear);

  return (
    <div className="webapp">
      <h1 style={{ textAlign: 'center' }}>THE GARDEN OF CHERRY</h1>
      <div className="app">
        <YearFilter
          years={["All", ...new Set(games.map(game => game.year))]} // Generate years dynamically as needed from data.js
          selectedYear={selectedYear}
          onYearChange={setSelectedYear}
        />
        <GamesGrid games={filteredGames} />
      </div>
      </div>
  );
};

export default App;
