import React from 'react';
import { MovieCardView } from './MovieCardView/MovieCardView';
import { useMovieItem } from './hooks'


export class MovieCard extends React.Component<{image: string, text: string}> {
    state: { mouseEnter: string; };
    constructor (props: {
        image: string,
        text: string
    }) {
        super(props);
        this.state = {
            mouseEnter: 'leave',
        }
    } 
    render() {
        const use = useMovieItem(this);
        const image = this.props.image;
        const text = this.props.text;
        const state = this.state;
        const newProps = {...use, state, image, text}
        return (
            <MovieCardView {...newProps}/>
        )
    }
}
