import React from "react";
import "./LoginView.scss";
interface Props {
  exit: (arg: any) => void;
  userName: string;
  changeUserNameText: (arg: any) => void;
  submit: (arg: any) => void;
  setUserNameText: (arg: any) => void;
}
interface State {
  field: string;
  initial: boolean;
  text: string;
}

export class LoginViewEnter extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      field: "user",
      initial: false,
      text: this.props.userName,
    };
  }
  handleBlur = async (e: any) => {
    const { setUserNameText, submit } = this.props;
    await setUserNameText(this.state.text);
    submit(e);
    this.setState({
      field: "user",
    });
  };
  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      text: e.currentTarget.value,
    });
  };
  handleSwap = () => {
    const newField = this.state.field === "user" ? "input" : "user";
    this.setState({
      field: newField,
    });
  };
  render() {
    const { exit, userName } = this.props;
    const { field, text } = this.state;
    if (field === "user") {
      return (
        <div className="login">
          <span onClick={this.handleSwap} className="login__text">
            {userName}
          </span>
          <button onClick={exit} className="login__exit">
            Выйти
          </button>
        </div>
      );
    }
    return (
      <div className="login">
        <input
          autoFocus={true}
          className="login__input"
          onBlur={this.handleBlur}
          type="text"
          value={text}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
