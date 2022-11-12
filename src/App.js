import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { TestModal } from "./components/Modals";

function App() {
  const [modalShown, setModalShown] = useState(false);
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'>
          Learn React
        </a>
      </header>
      <TestModal modalShown={modalShown} setModalShown={setModalShown} />
      <button
        onClick={() => setModalShown(!modalShown)}
        className='btn btn-success'>
        Show
      </button>
    </div>
  );
}

export default App;
