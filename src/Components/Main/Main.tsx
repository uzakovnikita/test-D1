import React, { FunctionComponent } from "react";
import { MainFilmsView } from "./MainView/MainFilmsView";
import { MainChannelsView } from "./MainView/MainChannelsView";
import "./MainView/MainView.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";

interface props {
  autorized: boolean;
}

export const Main: FunctionComponent<props> = (props: props) => {
  const { autorized } = props;

  if (autorized) {
    return (
      <Router>
        <main>
          <nav>
            <div className="nav__item">
              <NavLink to="/index-movies-auth">Фильмы</NavLink>
            </div>
            <div className="nav__item">
              <NavLink to="index-channels-auth">Телеканалы</NavLink>
            </div>
          </nav>
          <Switch>
            <Route path="/index-movies-auth">
              <MainFilmsView />
            </Route>
            <Route path="/index-channels-auth">
              <MainChannelsView />
            </Route>
            <Redirect to="/index-movies-auth" />
          </Switch>
        </main>
      </Router>
    );
  } else {
    return (
      <Router>
        <main>
          <nav>
            <div className="nav__item">
              <NavLink to="/index-movies">Фильмы</NavLink>
            </div>
            <div className="nav__item">
              <NavLink to="index-channels">Телеканалы</NavLink>
            </div>
          </nav>
          <Switch>
            <Route path="/index-movies">
              <MainFilmsView />
            </Route>
            <Route path="/index-channels">
              <MainChannelsView />
            </Route>
            <Redirect to="/index-movies" />
          </Switch>
        </main>
      </Router>
    );
  }
};
