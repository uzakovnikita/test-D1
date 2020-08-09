import React, { FunctionComponent } from "react";
import { MovieCard } from "../../MovieCard/MovieCard";
import { GenreCard } from "../../GenreCard/GenreCard";
interface Props {}

export const MainFilmsView: FunctionComponent<Props> = (props: Props) => {
  const films = (
    <div className="novelties">
      <p className="novelties__title"> &#128293;Новинки</p>
      <div className="novelties__container">
        <MovieCard
          image={`./images/catMovie.svg`}
          text={"Мульт в кино. Выпуск №103. Некогда грустить!"}
        />
        <MovieCard image={"./images/batmanMovie.svg"} text={"Новый Бэтмэн"} />
        <MovieCard
          image={"./images/hollywoodMovie.svg"}
          text={"Однажды...в Голливуде"}
        />
        <MovieCard
          image={"./images/strippersMovie.svg"}
          text={"Стриптизершы"}
        />
      </div>
    </div>
  );

  const genres = (
    <div className="genres">
      <p className="genres__title">Жанры</p>
      <div className="genres__container">
        <GenreCard
          genreRus="Комедии"
          genre="comedies"
          img="./images/comedies.svg"
        />
        <GenreCard genreRus="Драмы" genre="drams" img="./images/drams.svg" />
        <GenreCard
          genreRus="Фантастика"
          genre="fantastic"
          img="./images/fantastic.svg"
        />
        <GenreCard
          genreRus="Ужасы"
          genre="horrors"
          img="./images/horrors.svg"
        />
      </div>
    </div>
  );

  const result = (
    <>
      {films}
      {genres}
    </>
  );

  return result;
};
