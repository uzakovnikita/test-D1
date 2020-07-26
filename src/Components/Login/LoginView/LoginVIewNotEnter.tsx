import React from 'react';

interface handle {
    (e: React.MouseEvent): void
}

interface Props {
    handle: handle
}

export class LoginViewNotEnter extends React.Component<Props> {
    render() {
        const handleClick = this.props.handle;
        return (<div className="login">
            <button className="login__enter" onClick={handleClick}>Войти</button>
        </div>)
    }
}