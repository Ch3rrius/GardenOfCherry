import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Credit to Tatsunical for the idea
        </p>
        <a
          className="App-link"
          href="https://www.twitch.tv/tatsunical"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tatsunical On Twitch - see "GAMES ARCHIVE" - https://tatsu-games-list.web.app/
        </a>
      </header>
    </div>
  );
}

export default App;
