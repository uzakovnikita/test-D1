import React from "react";
import "./GenreCardView.scss";
export class GenreCardView extends React.Component<{
  genre: string;
  img: string;
  imgAlt: string;
  genreRus: string;
}> {
  render() {
    const genreCardClass = `genres__card genres__card_${this.props.genre}`;
    return (
      // eslint-disable-next-line
      <a className="genres__link" href="#">
        <div className={genreCardClass}>
          <img
            className="genres__image-content"
            src={this.props.img}
            alt={this.props.imgAlt}
          />
          <p className="genres__text-content">{this.props.genreRus}</p>
        </div>
      </a>
    );
  }
}
