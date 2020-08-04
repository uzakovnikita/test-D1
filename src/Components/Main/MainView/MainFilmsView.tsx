import React, { FunctionComponent } from 'react';
import {MovieCard} from '../../MovieCard/MovieCard'
import {GenreCard} from '../../GenreCard/GenreCard'
interface Props {
}

export const MainFilmsView: FunctionComponent<Props> = (props: Props) => {
    const title = (<div className="new__title">
                        <p className="new__text">Новинки</p>
                        <img src="" alt="" className="new__logo"/>
                    </div>)

    const films = (<div className="new__films">
                        <MovieCard image={`./images/catMovie.svg`} text={'Мульт в кино. Выпуск №103. Некогда грустить!'}/>
                        <MovieCard image={'./images/batmanMovie.svg'} text={'Новый Бэтмэн'}/>
                        <MovieCard image={'./images/hollywoodMovie.svg'} text={'Однажды...в Голливуде'}/>
                        <MovieCard image={'./images/strippersMovie.svg'} text={'Стриптизершы'}/>
                    </div>)

    const genres = <div className="genres">
        <GenreCard/>
        <GenreCard/>
        <GenreCard/>
    </div>

    const result = <div className="new">
        {title}
        {films}
        {genres}
    </div>
    
    return result;
}