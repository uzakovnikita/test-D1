import React, { FunctionComponent } from 'react';
import './LogoView.scss'

export const LogoView: FunctionComponent = () => {
    return <div className="logo">
        <img className="logo__image" src="/images/sign.svg" alt="sign"/>
        <p className="logo__text">Видеосервис</p>
    </div>
}