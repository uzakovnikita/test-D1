import React from 'react';
import {HeaderView} from './HeaderView/HeaderView'


export class Header extends React.Component {
    render() {
        return <HeaderView><>{this.props.children}</></HeaderView>
    }
}