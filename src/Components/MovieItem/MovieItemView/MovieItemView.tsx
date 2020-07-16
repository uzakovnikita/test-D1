import React from 'react';
import './MovieItemView.scss';

export class MovieItemView extends React.Component {
    [x: string]: {
        onMouseEnter: any;
        onMouseLeave: any; 
        state: any;
    };
    render() {
    const {onMouseEnter, onMouseLeave,  state} = this.props;
       return (
        <div className='movieItem' {onMouseLeave} {onMouseEnter}>
            <div className='movieItem__container'>
                <div className='movieItem__image'>
                    <img className='movieItem__image-content'></img>
                </div>
                <div className='movieItem__text'>
                    <p className='movieItem__text-content'></p>
                </div>
            </div>
        </div>
       )
    }
}