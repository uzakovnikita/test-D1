import React, { MouseEvent } from 'react';
import './App.scss';
import {Header} from '../Components/Header/Header';
import { Autorization } from '../Components/Autorization/Autorization'


interface Props {};
interface State {
  userNameText: string,
  passwordText: string,
  userName: string,
  password: string
  remember: boolean,
  autorized: boolean,
  modal: boolean,
}

export class App extends React.Component<Props, State> {
  refOutside: React.RefObject<HTMLDivElement>;
  refInner: React.RefObject<HTMLFormElement>;
  static propTypes: { children: any; };
  constructor (props: any) {
    super(props);
    this.state = {
      userNameText: '',
      passwordText: '',
      userName: '',
      password: '',
      remember: false,
      autorized: false,
      modal: false,
    }
    this.refOutside = React.createRef();
    this.refInner = React.createRef();
  }
  handleSetModalTrue = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    const updateModal = true
    this.setState({modal: updateModal})

  }
  handleSetModalFalse = (e: any) => {
    e.stopPropagation()
    if (this.refInner.current && !this.refInner.current.contains(e.target)) {
      this.setState({modal: false})
    }
  }
  handleChangePasswordText = (e: React.FormEvent<HTMLInputElement>) => {
    const updatedPassword = e.currentTarget.value;
    this.setState({
      passwordText: updatedPassword
    })
  }
  handleChangeUserNameText = (e: React.FormEvent<HTMLInputElement>) => {
    const updateUserName = e.currentTarget.value;
    this.setState({
      userNameText: updateUserName
    })
  }
  handleChangeRemember = () => {
    this.setState((state => ({
      remember: !state.remember
    })))
  }
  handleExit = () => {
    this.setState({
      userName: '',
      autorized: false,
      remember: false
    })
  }
  handleSubmit = (e: React.FormEvent<MouseEvent>) => {
    e.preventDefault();
    const newUserName = this.state.userNameText;
    this.setState({userName: newUserName, 
                  autorized: true, 
                  userNameText: '', 
                  passwordText: '', 
                  remember: false,
                  modal: false })
  }
  render () {
    const Auth = this.state.modal ? 
    (<Autorization 
        inputRef={this.refInner}
        remember={this.state.remember} 
        userNameText={this.state.userNameText}
        passwordText={this.state.passwordText} 
        submit={this.handleSubmit}
        changePassword={this.handleChangePasswordText} 
        changeUserName={this.handleChangeUserNameText}
        changeRemember={this.handleChangeRemember}/>) : null;

    return (  
        <div className="App" onClick={this.handleSetModalFalse} ref={this.refOutside}>
          {Auth}
          <Header exit={this.handleExit} 
          setModalTrue={this.handleSetModalTrue} 
          autorized={this.state.autorized} 
          userName={this.state.userName}/>
        </div>
    );
  }
}
