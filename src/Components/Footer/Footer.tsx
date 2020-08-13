import React, { FunctionComponent } from "react";
import "./FooterView/FooterView.scss";
interface Props {}

export const Footer: FunctionComponent<Props> = (props: Props) => {
  return (
    <footer>
      <div className="footer-content">
        <img src="./images/htc-cs-logo.svg" alt="htc-cs-logo"></img>
        <div className="footer-content__text-container">
          <p className="footer-content__text">
            426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса,
            246 (ДК «Металлург»)
          </p>
          <p className="footer-content__text">+7 (3412) 93-88-61, 43-29-29</p>
          <p className="footer-content__text footer-content__text_light">
            <a className="footer-content__link" href="https://htc-cs.ru/">
              htc-cs.ru
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
