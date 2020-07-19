import React from 'react';
import './GenreCardView.scss';
export class GenreCardView extends React.Component<{genre: string, img: string, imgAlt: string}> {
    render() {
        const genreCardClass = `genre-card__${this.props.genre}`;
        const genreCardTextContentClass = `${genreCardClass}__text-content-${this.props.genre}`
        return(<>
        <div className={genreCardClass}>
            <img src={this.props.img} alt={this.props.imgAlt}/>
            <p className={genreCardTextContentClass}>GenreCardView</p>
        </div>
        </>)
    }
}