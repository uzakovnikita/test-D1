import React, { MouseEvent } from "react";
import "./App.scss";
import { Header } from "../Components/Header/Header";
import { Autorization } from "../Components/Autorization/Autorization";
import { Routing } from "../Components/Routing/Routing";
import { Footer } from "../Components/Footer/Footer";

interface Props {}
interface State {
  userNameText: string;
  passwordText: string;
  userName: string;
  password: string;
  remember: boolean;
  autorized: boolean;
  modal: boolean;
}

export class App extends React.Component<Props, State> {
  refOutside: React.RefObject<HTMLDivElement>;
  refInner: React.RefObject<HTMLFormElement>;
  refButton: React.RefObject<HTMLButtonElement>;
  static propTypes: { children: any };
  password: any;
  autorized: boolean;
  user: string;
  constructor(props: any) {
    super(props);
    this.autorized = !!sessionStorage.getItem("autorization") || false;
    this.user = sessionStorage.getItem("user") || "";
    this.state = {
      userNameText: "",
      passwordText: "",
      userName: this.user,
      password: "",
      remember: false,
      autorized: this.autorized,
      modal: false,
    };
    this.refOutside = React.createRef();
    this.refInner = React.createRef();
    this.refButton = React.createRef();
  }
  handleSetModalTrue = (e: any) => {
    e.preventDefault();
    const updateModal = true;
    this.setState({ modal: updateModal });
  };
  handleSetModalFalse = (e: any) => {
    const isModalBuild = !!this.refInner.current;
    const modalIsContainsTargetClick = !!this.refInner.current?.contains(
      e.target
    );
    const isClickOnButton = this.refButton.current?.contains(e.target);
    const modal =
      (isModalBuild && modalIsContainsTargetClick) || isClickOnButton;
    if (!modal) {
      this.setState({ modal: false });
    }
  };
  handleChangePasswordText = (
    e: React.FormEvent<HTMLInputElement> | string
  ) => {
    let updatedPassword: string;
    if (typeof e === "string") {
      updatedPassword = e;
    } else {
      updatedPassword = e.currentTarget.value;
    }
    this.setState({
      passwordText: updatedPassword,
    });
  };
  handleSetUserNameText = (e: string) => {
    this.setState({
      userNameText: e,
    });
  };
  handleChangeUserNameText = (e: React.FormEvent<HTMLInputElement>) => {
    let updateUserName: string;
    if (typeof e === "string") {
      updateUserName = e;
    } else {
      updateUserName = e.currentTarget.value;
    }
    this.setState({
      userNameText: updateUserName,
    });
  };
  handleChangeRemember = () => {
    this.setState((state) => ({
      remember: !state.remember,
    }));
  };
  handleExit = () => {
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("autorization");
    this.setState({
      userName: "",
      autorized: false,
      remember: false,
    });
  };
  handleSubmit = (e: React.FormEvent<MouseEvent>) => {
    e.preventDefault();
    const newUserName = this.state.userNameText;
    const password = this.state.passwordText;
    if (this.state.remember) {
      localStorage.setItem("user", newUserName);
      localStorage.setItem("password", password);
    }
    sessionStorage.setItem("autorization", "true");
    sessionStorage.setItem("user", newUserName);
    this.setState({
      userName: newUserName,
      password,
      autorized: true,
      userNameText: "",
      passwordText: "",
      remember: false,
      modal: false,
    });
  };
  render() {
    const Auth = this.state.modal ? (
      <Autorization
        inputRef={this.refInner}
        remember={this.state.remember}
        userNameText={this.state.userNameText}
        passwordText={this.state.passwordText}
        submit={this.handleSubmit}
        changePassword={this.handleChangePasswordText}
        changeUserName={this.handleChangeUserNameText}
        changeRemember={this.handleChangeRemember}
      />
    ) : null;
    return (
      <div
        className="App"
        onMouseDown={this.handleSetModalFalse}
        ref={this.refOutside}>
        {Auth}
        <Header
          exit={this.handleExit}
          setModalTrue={this.handleSetModalTrue}
          autorized={this.state.autorized}
          userName={this.state.userName}
          inputRef={this.refButton}
          changeUserNameText={this.handleChangeUserNameText}
          setUserNameText={this.handleSetUserNameText}
          submit={this.handleSubmit}
        />
        <Routing autorized={this.state.autorized} />
        <Footer />
      </div>
    );
  }
}
