import React, { FunctionComponent } from 'react';

interface Props {
    exit: (arg: any) => void,
    userName: string
}

export const LoginViewEnter: FunctionComponent<Props> = (props) => {
    const {userName, exit} = props;
    return (
        <>
            <div className="login">
                <span className="login__text">
                    {userName}
                </span>
                <button onClick={exit} className="login__exit">
                    Выйти
                </button>
            </div>
        </>
    )
}