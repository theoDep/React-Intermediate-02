import React from 'react';
import { useState } from 'react';
import './style.css';
import axios from 'axios';
import QuoteCard from './components/QuoteCard';

const SampleData = {
  quote: 'By chilling my loins I increase the chances of impregnating my wife.',
  character: 'Apu Nahasapeemapetilon',
  image:
    'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629',
  characterDirection: 'Left',
};

export default function App() {
  const [data, setData] = useState(SampleData);
  const { quote, character, image } = data;
  const getData = () => {
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      .then((response) => response.data)
      .then((data) => {
        setData(data[0]);
      });
  };
  return (
    <div>
      <QuoteCard quote={quote} character={character} image={image} />
      <button type="button" onClick={getData}>
        Get Random Quote
      </button>
    </div>
  );
}
