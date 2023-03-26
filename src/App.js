import Dictionary from "./Dictionary"
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <h1>DICTIONARY</h1>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="text-center">Coded by Claudia Vashchenko, open-sourced on <a href="https://github.com/claudiavashchenko/dictionary-app" target="_blank"  rel="noreferrer">Github</a>.</footer>
      </div>
    </div>
  );
}

export default App;
