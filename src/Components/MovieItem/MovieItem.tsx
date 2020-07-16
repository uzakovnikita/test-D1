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
        const use = useMovieItem(this)
        const state = this.state;
        const props = {...use, state}
        return (
            <MovieItemView {...props}/>
        )
    }
}
