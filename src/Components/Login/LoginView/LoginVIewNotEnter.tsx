import React from 'react';


export class LoginViewNotEnter extends React.Component<any> {
    render() {
        return (<div className="login">
            <button onClick={this.props.setModalTrue} className="login__enter">Войти</button>
        </div>)
    }
}