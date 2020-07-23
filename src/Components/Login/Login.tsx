import React from 'react';
import { LoginView } from './LoginView/LoginView';

export class Login extends React.Component {
    state: {view: string, userLogin: string, password: string, remember: boolean}
    constructor (props: any) {
        super(props);
        this.state = {
            view: 'button',
            userLogin: '',
            password: '',
            remember: false,
        }
    }
    render () {
        const modal = 
        const button = <button className="login__button">Войти</button>
    }
}