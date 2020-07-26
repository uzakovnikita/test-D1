import React from 'react';
import { HeaderView } from './HeaderView/HeaderView'
import { Logo } from '../Logo/Logo';
import { SearchForm } from '../SearchForm/SearchForm';
import { Login } from '../Login/Login'

export class Header extends React.Component {
    render() {
        return <HeaderView>
            <Logo />
            <SearchForm />
            <Login />
        </HeaderView>
    }
}