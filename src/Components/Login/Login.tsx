import React, { MouseEvent } from 'react';
import { AppContext } from '../../App/AppContext';
import { LoginViewEnter } from './LoginView/LoginViewEnter';
import { LoginViewNotEnter } from './LoginView/LoginVIewNotEnter';
import { Modal } from '../Modal/Modal';

interface Props {};
interface State {
    modal: string,
}

export class Login extends React.Component<Props, State> {
    constructor (props: any) {
        super(props);
        this.state = {
            modal: 'not',
        }
    }
    handleChangeModal = (e: React.MouseEvent): void => {
        const newStatusModal = this.state.modal === 'not' ? 'yes' : 'not';
        this.setState({
            modal: newStatusModal
        })
    }
    render () {
        const modalWindow = this.state.modal === 'yes' ? <Modal /> : null;
        return <AppContext.Consumer>
            {({autorized}) => {
                if (autorized === 'yes') {
                    return (<LoginViewEnter/>)
                } 
                return (<><LoginViewNotEnter handle={this.handleChangeModal}/>{modalWindow}</>)
            }}
        </AppContext.Consumer>
    }
}