import React, { FunctionComponent } from "react";
import "./ChannelView/ChannelView.scss";

interface Props {
  channelName: string;
  firstTime: string;
  secondTime: string;
  thirdTime: string;
  logo: string;
}

export const Channel: FunctionComponent<Props> = (props: Props) => {
  return (
    <div className="channel-container">
      <div className="channel-container__image-container">
        <img src={props.logo} alt={props.channelName} />
      </div>
      <div className="channel-container__text-container">
        <p className="channel-container__title">{props.channelName}</p>
        <div className="channel-container__programms channel-container__programms_active">
          <p>13:00</p>
          <p>{props.firstTime}</p>
        </div>
        <div className="channel-container__programms">
          <p>14:00</p>
          <p>{props.secondTime}</p>
        </div>
        <div className="channel-container__programms">
          <p>15:00</p>
          <p>{props.thirdTime}</p>
        </div>
      </div>
    </div>
  );
};
