import React from 'react';
import {GenreCardView} from './GenreCardView/GenreCardView'

interface Props {
    genre: string,
    img: string,
    imgAlt: string
}

export class GenreCard extends React.Component<Props> {
    static defaultProps = {
        img: '',
        imgAlt: 'default-imgAlt',
        genre: 'default-genre'
    }
    render () {
        return <div className='genre-card'><GenreCardView img={this.props.img} imgAlt={this.props.imgAlt} genre={this.props.genre}/></div>
    }
}