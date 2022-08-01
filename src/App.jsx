import './App.css';
import Celula from './components/Celula';

function App() {

  const rows = [' ', ' ', ' '];

  return (
    <div className="App">
      <div className='Game'>
        {
          rows.map(() => 
            <div className='Row'>
              <Celula></Celula>
              <Celula></Celula>
              <Celula></Celula>
            </div>
          )
        }
      </div>
    </div>
  );
}

export default App;
