import './App.css';
import Button from "./components/Button"
import Classic from './components/Classic';
import Greet from './components/Greet';
import Toggle from './components/Toggle';
import Timer from './components/Timer';
import Form from './components/Form'

function App() {
  return (
    <>
    <div className="App">

    <Button />
    < Classic />
    <Greet />
    <Toggle />
    <Timer />
    </div>
    <div className="others">
    <Form />
    </div>
    </>
  );
}

export default App;
