import React, {FunctionComponent } from 'react';
import { LoginViewEnter } from './LoginView/LoginViewEnter';
import { LoginViewNotEnter } from './LoginView/LoginVIewNotEnter';

interface Props {
    autorized: boolean,
    userName: string,
    setModalTrue: (arg: void) => void,
    exit: (arg: any) => void,
    inputRef: any
}

export const Login: FunctionComponent<Props> = (props) => {
    const { autorized, userName, setModalTrue, exit, inputRef } = props;
    const view = autorized ? <LoginViewEnter userName={userName} exit={exit}/> : 
    <LoginViewNotEnter inputRef={inputRef} setModalTrue={setModalTrue}/>;
    return view;
}