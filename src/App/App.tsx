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
  modal: string,
}

export class App extends React.Component<Props, State> {
  refOutside: React.RefObject<HTMLDivElement>;
  refInner: React.RefObject<any>;
  constructor (props: any) {
    super(props);
    this.state = {
      userNameText: '',
      passwordText: '',
      userName: '',
      password: '',
      remember: false,
      autorized: false,
      modal: 'net',
    }
    this.refOutside = React.createRef();
    this.refInner = React.createRef();
  }
  handleSetModalTrue = () => {
    console.log('op')
    this.setState({modal: 'da'})
    const updateModal = 'da'
    console.log(this.state)
    this.setState({modal: updateModal})
  }
  handleSetModalFalse = (e: any) => {

    console.log(e.currentTarget === this.refInner.current)
    if (e.currentTarget !== this.refInner.current) {
      this.setState({modal: 'net'})
    }
    console.log('vsem privet')
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
                  remember: false })
  }
  componentDidMount() {
    document.addEventListener('click', this.handleSetModalFalse);
  }
  componentWillUnmount() {
    document.removeEventListener('click', this.handleSetModalFalse);
  }
  render () {
    const Auth = this.state.modal === 'da'? 
    (<Autorization 
        ref={this.refInner}
        remember={this.state.remember} 
        userNameText={this.state.userName}
        passwordText={this.state.password} 
        submit={this.handleSubmit}
        changePassword={this.handleChangePasswordText} 
        changeUserName={this.handleChangeUserNameText}
        changeRemember={this.handleChangeRemember}/>) : null;

    return (  
        <div className="App" ref={this.refOutside}>
          {Auth}  
          <Header exit={this.handleExit} 
          setModalTrue={this.handleSetModalTrue} 
          autorized={this.state.autorized} 
          userName={this.state.userName}/>
        </div>
    );
  }
}

