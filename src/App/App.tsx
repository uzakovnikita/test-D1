import React from 'react';
import './App.scss';

import { MovieCard } from '../Components/MovieCard/MovieCard';
import { GenreCard } from '../Components/GenreCard/GenreCard';
import {Header} from '../Components/Header/Header';

export function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

{/* <Header>
<Logo />
<SearchForm />
<LoginButton />
</Header>
<Main>
<Tabs/>
<New>
  <MovieCard text='мульт в кино, выпуск №1013' image=''/>
  <MovieCard/>
  <MovieCard/>
</New>
<Genres>
  <GenreCard/>
  <GenreCard/>
  <GenreCard/>
</Genres>
</Main>
<Footer>
<Footer__content/>
</Footer> */}