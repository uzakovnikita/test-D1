import React from 'react';
import { HeaderView } from './HeaderView/HeaderView'
import { Logo } from '../Logo/Logo';
import { SearchForm } from '../SearchForm/SearchForm';


export class Header extends React.Component {
    render() {
        return <HeaderView>
            <Logo />
            <SearchForm />
        </HeaderView>
    }
}