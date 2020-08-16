import React from "react";
import { MovieCardView } from "./MovieCardView/MovieCardView";

interface Props {
  image: string;
  title: string;
}

export class MovieCard extends React.Component<Props> {
  render() {
    const image = this.props.image;
    const title = this.props.title;
    const newProps = { image, title };
    return <MovieCardView {...newProps} />;
  }
}
