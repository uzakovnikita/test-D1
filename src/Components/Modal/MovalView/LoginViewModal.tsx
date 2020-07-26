import React from 'react';
import './LoginViewModal.scss';

interface Props {}

export class LoginViewModal extends React.Component<Props> {
    render() {
        return (<form>
            <input></input>
            <input></input>
            <input type="checkbox"></input>
            <input type="submit"></input>
        </form>)
    }
}
