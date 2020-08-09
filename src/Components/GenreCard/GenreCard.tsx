import React from "react";
import { GenreCardView } from "./GenreCardView/GenreCardView";

interface Props {
  genreRus: string;
  genre: string;
  img: string;
  imgAlt: string;
}

export class GenreCard extends React.Component<Props> {
  static defaultProps = {
    img: "",
    imgAlt: "default-imgAlt",
    genre: "default-genre",
    genreRus: "default-genre",
  };
  render() {
    return (
      <GenreCardView
        img={this.props.img}
        imgAlt={this.props.imgAlt}
        genre={this.props.genre}
        genreRus={this.props.genreRus}
      />
    );
  }
}
