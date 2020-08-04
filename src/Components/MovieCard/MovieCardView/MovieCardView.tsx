import React from 'react';
import './MovieCardView.scss';
import cn from 'classnames';

interface mouseMove {
    (): void;
}
interface stats {
    mouseEnter: string;
}
interface Props {
    enter: mouseMove
    leave: mouseMove
    state: {
        mouseEnter: string
    }
    image: string
    text: string
}
export class MovieCardView extends React.Component<Props> {
    static defaultProps = {
        image: '',
        text: 'default text'
    }
    render(): any {
        const {enter, leave, state, image, text} = this.props;
        const oppacityPredicate = state.mouseEnter === 'enter' ? true : false;
        const klass = cn({
            'movie-сard__text': true,
            'movie-card__text_disabled': oppacityPredicate
        })
        return (
        <div className='movie-card' onMouseLeave = {leave} onMouseEnter = {enter}>
            <div className='movie-card__container'>
                <div className='movie-card__image'>
                    <img className='movie-card__image-content' alt="alt"src={image}></img>
                </div>
                <div className={klass}>
                    <p className='movie-card__text-content'>{text}</p>
                </div>
            </div>
        </div>
       )
    }
}   