import React from "react";
import "./MovieCardView.scss";

interface Props {
  image: string;
  title: string;
  text: string;
}
export class MovieCardView extends React.Component<Props> {
  static defaultProps = {
    image: "",
    title: "default text",
  };
  render() {
    const { image, title, text } = this.props;
    return (
      <div className="movie-card">
        <div className="movie-card__content-container">
          <img
            className="movie-card__image-content"
            alt="alt"
            src={image}></img>
          <a href="#" className="movie-card__text-content">
            {text}
          </a>
        </div>
        <div className="movie-сard__title-container">
          <p className="movie-card__title">{title}</p>
        </div>
      </div>
    );
  }
}
