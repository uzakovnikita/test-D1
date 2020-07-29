import React from 'react';
import './HeaderView.scss';

export class HeaderView extends React.Component {
    render() {
        return <header>
            <>{this.props.children}</>
        </header>
    }
}
