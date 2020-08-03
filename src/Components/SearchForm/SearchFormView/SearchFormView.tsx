import React, { FunctionComponent } from 'react';
import './SearchFormView.scss';

interface change {(e: React.FormEvent<HTMLInputElement>): void};


interface HelloProps {change: change, search: any, text: string}

export const SearchFormView: FunctionComponent<HelloProps> = (props: HelloProps) => {
    return (<form className="search">
        <input className="search__input" placeholder="Поиск..." onChange={props.change} value={props.text}></input>
        <p className="search__button" onClick={props.search}>Найти</p>
    </form>)
}
