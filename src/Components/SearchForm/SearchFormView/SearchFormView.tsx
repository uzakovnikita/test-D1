import React, { FunctionComponent } from "react";
import "./SearchFormView.scss";

interface change {
  (e: React.FormEvent<HTMLInputElement>): void;
}

interface HelloProps {
  change: change;
  search: any;
  text: string;
}

export const SearchFormView: FunctionComponent<HelloProps> = (
  props: HelloProps
) => {
  return (
    <>
      <form className="search">
        <div className="search__input-container"></div>
        <input
          className="search__input"
          placeholder="Поиск..."
          onChange={props.change}
          value={props.text}></input>
        <input
          type="submit"
          value="Найти"
          className="search__button"
          onClick={props.search}></input>
      </form>
    </>
  );
};
