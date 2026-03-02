import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [letters, setLetters] = useState([]);

  // Lifecycle: componentDidMount
  useEffect (() => {
  console.log("App mounted -län render đầu tiên");
  }, []);

  // Lifecycle: componentDidUpdate
  useEffect (() => {
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
      <LetterForm onAdd={addLetter} />
      <LetterList letters={letters} />
    </div>
  );
}

export default App;
