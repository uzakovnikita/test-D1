import React from 'react';
import { AppContext } from '../../../App/AppContext';

export class LoginViewEnter extends React.Component {
    render() {
        return <AppContext.Consumer>
            {({userName, handleChangeAutorized}) => {
                return <div className="login">
                    <span className="login__name">{userName}</span>
                    <button className="login__exit" onClick={handleChangeAutorized}></button>
                </div>
            }}
        </AppContext.Consumer>
    }
}