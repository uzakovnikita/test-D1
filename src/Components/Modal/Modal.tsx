import React from 'react';
import { ModalView } from './MovalView/ModalView'
import { AppContext } from '../../App/AppContext';

interface State {
    userName: string,
    password: string,
    remember: boolean
}
interface Props {}

export class Modal extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            remember: false
        }
    }
    handleChangeUserName = (e: React.FormEvent<HTMLInputElement>): void => {
        const newUserName = e.currentTarget.value;
        this.setState({
            userName: newUserName
        })
    }
    handleChangePassword = (e: React.FormEvent<HTMLInputElement>): void => {
        const newPassword = e.currentTarget.value;
        this.setState({
            password: newPassword
        })
    }
    handleChangeRemember = (e: React.FormEvent<HTMLInputElement>): void => {
        this.setState({
            remember: !this.state.remember
        })
    }
    handleSumbit = (f1: Function, f2: Function) => (e: React.FormEvent<HTMLInputElement>): void => {
        e.preventDefault();
        f1(this.state.userName);
        f2();
        console.log('AAAA1')
    }
    render() {
        return (
            <AppContext.Consumer>{({handleChangeUserNameApp, handleChangeAutorized}) => (<ModalView 
                changeUserName={this.handleChangeUserName} 
                changePassword={this.handleChangePassword}
                changeRemember={this.handleChangeRemember} 
                submit={this.handleSumbit(handleChangeUserNameApp, handleChangeAutorized)}
                userName={this.state.userName} 
                password={this.state.password} 
                remember={this.state.remember}
            />)}</AppContext.Consumer>
        )
    }
}