import React from "react";
import { MovieCardView } from "./MovieCardView/MovieCardView";

interface Props {
  image: string;
  title: string;
  text: string;
}

export class MovieCard extends React.Component<Props> {
  render() {
    const image = this.props.image;
    const title = this.props.title;
    const text = this.props.text;
    const newProps = { image, text, title };
    return <MovieCardView {...newProps} />;
  }
}
