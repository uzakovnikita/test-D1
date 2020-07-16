import React from 'react';
import './MovieItemView.scss';
import cn from 'classnames';

interface mouseMove {
    (): void;
}
interface stats {
    mouseEnter: string;
}
export class MovieItemView extends React.Component<{enter: mouseMove, leave: mouseMove, state: stats}> {
    render(): any {
    const {enter, leave, state} = this.props;
        const oppacityPredicate = state.mouseEnter === 'enter' ? true : false;
        const klass = cn({
            'movieItem__text': true,
            'not-view': oppacityPredicate
        })
        return (
        <div className='movieItem' onMouseLeave = {leave} onMouseEnter = {enter}>
            <div className='movieItem__container'>
                <div className='movieItem__image'>
                    <img className='movieItem__image-content'></img>
                </div>
                <div className={klass}>
                    <p className='movieItem__text-content'>333</p>
                </div>
            </div>
        </div>
       )
    }
}