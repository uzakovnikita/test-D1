import React from 'react';
import { MovieItemView } from './MovieItemView/MovieItemView';
import { useMovieItem } from './hooks'


export class MovieItem extends React.Component {
    state: { mouseEnter: string; };
    constructor (props: object) {
        super(props);
        this.state = {
            mouseEnter: 'leave',
        }
    } 
    render() {
        const {onMouseEnter, onMouseLeave} = useMovieItem(this);
        const state = this.state;
        return (
            <MovieItemView {{...onMouseEnter, ...onMouseLeave, state}}/>
        )
    }
}
