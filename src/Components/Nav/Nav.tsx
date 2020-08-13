import React, { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import "./NavView/NavView.scss";
interface Props {
  autorized: boolean;
}

export const Nav: FunctionComponent<Props> = (props: Props) => {
  if (props.autorized) {
    return (
      <nav>
        <div className="nav__container">
          <NavLink
            className="nav__link"
            activeClassName="nav__link_active"
            to="/index-movies-auth">
            Фильмы
          </NavLink>
        </div>
        <div className="nav__container">
          <NavLink
            className="nav__link"
            activeClassName="nav__link_active"
            to="index-channels-auth">
            Телеканалы
          </NavLink>
        </div>
      </nav>
    );
  }
  return (
    <nav>
      <div className="nav__container">
        <NavLink
          to="/index-movies"
          className="nav__link"
          activeClassName="nav__link_active">
          Фильмы
        </NavLink>
      </div>
      <div className="nav__container">
        <NavLink
          to="index-channels"
          className="nav__link"
          activeClassName="nav__link_active">
          Телеканалы
        </NavLink>
      </div>
    </nav>
  );
};
