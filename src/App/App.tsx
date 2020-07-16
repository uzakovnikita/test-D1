import React from 'react';
import './App.scss';
import { Example } from '../Components/Example/Example';
import { MovieItem } from '../Components/MovieItem/MovieItem';

export function App() {
  return (
    <div className="App">
      <Example />
      <MovieItem />
    </div>
  );
}

