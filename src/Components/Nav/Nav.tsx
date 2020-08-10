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
        <div className="nav__item">
          <NavLink activeClassName="nav__link_active" to="/index-movies-auth">
            Фильмы
          </NavLink>
        </div>
        <div className="nav__item">
          <NavLink to="index-channels-auth">Телеканалы</NavLink>
        </div>
      </nav>
    );
  }
  return (
    <nav>
      <div className="nav__item">
        <NavLink to="/index-movies">Фильмы</NavLink>
      </div>
      <div className="nav__item">
        <NavLink to="index-channels">Телеканалы</NavLink>
      </div>
    </nav>
  );
};
