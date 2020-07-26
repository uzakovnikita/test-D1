import React from 'react';
import './ModalView.scss';

interface Props {
    changeUserName: any,
    changePassword: any,
    changeRemember: any,
    submit: any,
    userName: string,
    password: string,
    remember: boolean
}

export class ModalView extends React.Component<Props> {
    render() {
        return (
            <form onSubmit={this.props.submit}>
                <input onChange={this.props.changeUserName} value={this.props.userName} placeholder="Логин"></input>
                <input onChange={this.props.changePassword} value={this.props.password} placeholder="Пароль"></input>
                <input onChange={this.props.changeRemember} checked={this.props.remember} type="checkbox" value="Запомнить" id="remember"></input>
                <label htmlFor="remember">Запомнить</label>
                <input type="submit" value="Войти"/>
            </form>)
    }
}
