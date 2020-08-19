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
          title={"Мульт в кино. Выпуск №103. Некогда грустить!"}
          text={
            "Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии."
          }
        />
        <MovieCard
          text={
            "Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии."
          }
          image={"./images/batmanMovie.svg"}
          title={"Новый Бэтмэн"}
        />
        <MovieCard
          text={
            "Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии."
          }
          image={"./images/hollywoodMovie.svg"}
          title={"Однажды...в Голливуде"}
        />
        <MovieCard
          text={
            "Фильм повествует о череде событий, произошедших в Голливуде в 1969 году, на закате его «золотого века». Известный актер Рик Далтон и его дублер Клифф Бут пытаются найти свое место в стремительно меняющемся мире киноиндустрии."
          }
          image={"./images/strippersMovie.svg"}
          title={"Стриптизершы"}
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
