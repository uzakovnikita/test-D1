import React, { FunctionComponent } from "react";
import { Main } from "../Main/Main";
import { Nav } from "../Nav/Nav";
import "../Main/MainView/MainView.scss";
import { BrowserRouter as Router } from "react-router-dom";

interface props {
  autorized: boolean;
}

export const Routing: FunctionComponent<props> = (props: props) => {
  const { autorized } = props;
  return (
    <Router>
      <Nav autorized={autorized} />
      <Main autorized={autorized} />
    </Router>
  );
};
