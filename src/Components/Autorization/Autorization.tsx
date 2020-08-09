import React from "react";

interface Props {
  inputRef?: any;
  submit: (arg0: any) => void;
  changePassword: (arg0: any) => void;
  changeUserName: (arg0: any) => void;
  changeRemember: (arg0: any) => void;
  userNameText: string;
  passwordText: string;
  remember: boolean;
}

export class Autorization extends React.Component<Props> {
  componentDidMount() {
    const userName = localStorage.getItem("user") || "";
    this.props.changeUserName(userName);
    const password = localStorage.getItem("password") || "";
    this.props.changePassword(password);
  }
  render() {
    return (
      <form
        className="autorization"
        onSubmit={this.props.submit}
        ref={this.props.inputRef}>
        <input
          onChange={this.props.changeUserName}
          value={this.props.userNameText}
          placeholder="Логин"></input>
        <input
          onChange={this.props.changePassword}
          value={this.props.passwordText}
          type="password"
          placeholder="Пароль"></input>
        <input
          onChange={this.props.changeRemember}
          checked={this.props.remember}
          type="checkbox"
          value="Запомнить"
          id="remember"></input>
        <label htmlFor="remember">Запомнить</label>
        <input type="submit" value="Войти" />
      </form>
    );
  }
}
