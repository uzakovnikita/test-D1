import React, { FunctionComponent } from 'react';
import './SearchFormView.scss';

interface change {(x: React.FormEvent<HTMLInputElement>): void};
interface search {(x: any): any};

interface HelloProps {change: change, search: any}

export const SearchFormView = (props: HelloProps) => {
    return (<form className="search">
        <input className="search__input" placeholder="Поиск..." onChange={props.change}></input>
        <span className="search__button" onClick={props.search}>Найти</span>
    </form>)
}
