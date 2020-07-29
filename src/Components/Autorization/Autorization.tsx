import React, { FunctionComponent } from 'react';

interface Props {
    ref: any
    submit: (arg0: any)=> void,
    changePassword: (arg0: any) => void,
    changeUserName: (arg0: any) => void,
    changeRemember: (arg0: any) => void,
    userNameText: string,
    passwordText: string,
    remember: boolean
}

export class Autorization extends React.Component<Props> {

    render () {
        return (<form onSubmit={this.props.submit}>
            <input onChange={this.props.changeUserName} value={this.props.userNameText} placeholder="Логин"></input>
            <input onChange={this.props.changePassword} value={this.props.passwordText} placeholder="Пароль"></input>
            <input onChange={this.props.changeRemember} checked={this.props.remember} type="checkbox" value="Запомнить" id="remember"></input>
            <label htmlFor="remember">Запомнить</label>
            <input type="submit" value="Войти"/>
        </form>) 
    }
} 