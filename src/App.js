import './App.css';
import Button from "./components/Button"
import Classic from './components/Classic';
import Greet from './components/Greet';
import Toggle from './components/Toggle'

function App() {
  return (
    <div className="App">
   
    <h1>Hello!</h1>
    <Button />
    < Classic />
    <Greet />
    <Toggle />
    </div>
  );
}

export default App;
