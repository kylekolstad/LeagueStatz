import logo from './logo.svg';
import './App.scss';
import MatchHistory from './components/MatchHistory/MatchHistory';

function App() {
  return ( 
    <div className = "App" >
      <header className = "App-header" >
        <img 
          src = { logo }
          className = "App-logo"
          alt = "logo"
        />
      </header>
      <body>
        <MatchHistory />
      </body>
    </div>
  );
}

export default App;