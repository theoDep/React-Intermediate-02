import React from 'react';
import { useState } from 'react';
import './style.css';
import axios from 'axios';
import QuoteCard from './components/QuoteCard';

const SampleQuote = {
  quote: 'By chilling my loins I increase the chances of impregnating my wife.',
  character: 'Apu Nahasapeemapetilon',
  image:
    'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629',
  characterDirection: 'Left',
};

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
