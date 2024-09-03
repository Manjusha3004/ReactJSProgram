import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [items, setItems] = useState([
    'Apple',
    'Banana',
    'Pinaple',
    'Grapes',
    'Mango',
  ]);
  const handleShuffle = (e) => {
    const shuffleItems = [...items];

    for (let i = shuffleItems.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [shuffleItems[i], shuffleItems[j]] = [shuffleItems[j], shuffleItems[i]];
    }
    setItems(shuffleItems);
  };

  return (
    <>
      <h1>Shuffle Items</h1>
      <ul>
        {items.map((el, index) => (
          <li key={index}>{el}</li>
        ))}

        <button className="" onClick={handleShuffle}>
          Shuffle
        </button>
      </ul>
    </>
  );
}

export default App;
