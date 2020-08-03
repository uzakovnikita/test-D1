import React, { FunctionComponent } from 'react';
import { HeaderView } from './HeaderView/HeaderView'
import { Logo } from '../Logo/Logo';
import { SearchForm } from '../SearchForm/SearchForm';
import { Login } from '../Login/Login'

interface Props {
    autorized: boolean,
    userName: string,
    setModalTrue: (arg: any) => void,
    exit: (arg: any) => void,
    inputRef: any
}

export const Header: FunctionComponent<Props> = (props) =>{
    const { autorized, userName, setModalTrue, exit, inputRef } = props;
    return <HeaderView>
        <Logo />
        <SearchForm />
        <Login exit={exit}
        setModalTrue={setModalTrue} 
        autorized = {autorized} 
        userName={userName}
        inputRef={inputRef}/>
    </HeaderView>    
}