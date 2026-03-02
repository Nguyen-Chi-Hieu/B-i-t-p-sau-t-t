import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Xinchao from './Xinchao';

function App() {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    console.log("App mounted");
  }, []);

  useEffect(() => {
    console.log("Letters updated:", letters);
  }, [letters]);

  const addLetter = (content) => {
    setLetters([
      ...letters,
      {
        id: Date.now(),
        content,
      },
    ]);
  };

  return (
    <div>
      <Xinchao onAdd={addLetter} />
      <XinchaoList letters={letters} />
    </div>
  );
}

export default App;