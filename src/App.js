import './App.css';
import { Aside } from './components/Aside/Aside';
import { Main } from './components/Main/Main';
import { NavBar } from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
