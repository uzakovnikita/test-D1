import React, { FunctionComponent } from 'react';
import './LogoView.scss'

export const LogoView: FunctionComponent = () => {
    return <div className="logo">
        <table>
        <tbody>
            <tr className="logo__content">
                <td className="logo__content-cell">  
                    <img className="logo__image" src="/images/sign.svg" alt="sign"/>
                </td>
                <td className="logo__content-cell">
                    <p className="logo__text">Видеосервис</p>
                </td>
            </tr>
        </tbody>
        </table>
    </div>
}