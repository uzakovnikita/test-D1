import React, { FunctionComponent } from "react";
import { LoginViewEnter } from "./LoginView/LoginViewEnter";
import { LoginViewNotEnter } from "./LoginView/LoginVIewNotEnter";

interface Props {
  autorized: boolean;
  userName: string;
  setModalTrue: (arg: void) => void;
  exit: (arg: any) => void;
  inputRef: any;
  changeUserNameText: (arg: any) => void;
  submit: (arg: any) => void;
  setUserNameText: (arg: any) => void;
}

export const Login: FunctionComponent<Props> = (props) => {
  const {
    autorized,
    userName,
    setModalTrue,
    exit,
    inputRef,
    changeUserNameText,
    submit,
    setUserNameText,
  } = props;
  const view = autorized ? (
    <LoginViewEnter
      setUserNameText={setUserNameText}
      userName={userName}
      exit={exit}
      changeUserNameText={changeUserNameText}
      submit={submit}
    />
  ) : (
    <LoginViewNotEnter inputRef={inputRef} setModalTrue={setModalTrue} />
  );
  return view;
};
