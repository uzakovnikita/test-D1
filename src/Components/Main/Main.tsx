import React, { FunctionComponent } from "react";
import { MainFilmsView } from "./MainView/MainFilmsView";
import { MainChannelsView } from "./MainView/MainChannelsView";
import "./MainView/MainView.scss";
import { Switch, Route, Redirect } from "react-router-dom";

interface props {
  autorized: boolean;
}

export const Main: FunctionComponent<props> = (props: props) => {
  const { autorized } = props;
  if (autorized) {
    return (
      <main>
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
    );
  }
  return (
    <main>
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
  );
};
