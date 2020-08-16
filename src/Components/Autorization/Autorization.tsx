import React from "react";
import "./AutorizationView/AutorizationView.scss";
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
      <div className="popup">
        <div className="popup__wrapper">
          <div className="popup__body" ref={this.props.inputRef}>
            <div className="popup__content">
              <p className="popup__title">Вход</p>
              <form className="autorization" onSubmit={this.props.submit}>
                <input
                  className="autorization__input autorization__login"
                  onChange={this.props.changeUserName}
                  value={this.props.userNameText}
                  placeholder="Логин"></input>
                <input
                  className="autorization__input autorization__password"
                  onChange={this.props.changePassword}
                  value={this.props.passwordText}
                  type="password"
                  placeholder="Пароль"></input>
                <div className="autorization__remember-container">
                  <input
                    className="autorization__remember-button"
                    onChange={this.props.changeRemember}
                    checked={this.props.remember}
                    type="checkbox"
                    value="Запомнить"
                    id="remember"></input>
                  <label
                    className="autorization__remember-label"
                    htmlFor="remember">
                    Запомнить
                  </label>
                </div>

                <input
                  className="autorizaton__signin"
                  type="submit"
                  value="Войти"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
