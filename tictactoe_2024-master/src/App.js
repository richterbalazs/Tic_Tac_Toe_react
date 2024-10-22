
import './App.css';
import JatekTer from './components/JatekTer';
import { useContext } from 'react';
import { kattContext } from './context/kattContext';

function App() {
  const {lista}=useContext(kattContext);

  return (
    <div className="App">
      <header className="App-header">
       <h1>Tic-Tac-Toe</h1>

      </header>
      <article>
        <div className="jatekter">
          <JatekTer lista={lista}/>
        </div>
      </article>
      <footer>saját név</footer>
    </div>
  );
}

export default App;
