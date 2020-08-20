import React, { FunctionComponent } from "react";
import { Channel } from "../../Channel/Channel";
import { Scrollbars } from "react-custom-scrollbars";
interface Props {}

export const MainChannelsView: FunctionComponent = (props: Props) => {
  return (
    <div className="channels">
      <Scrollbars
        thumbSize={500}
        renderTrackHorizontal={(props) => (
          <div {...props} className="track-horizontal" />
        )}
        renderTrackVertical={(props) => (
          <div {...props} className="track-vertical" />
        )}
        renderThumbVertical={(props) => (
          <div {...props} className="thumb-vertical" />
        )}
        renderView={(props) => <div {...props} className="view" />}>
        <div className="custom-scrollbar-wrap">
          <Channel
            channelName="Первый канал"
            firstTime="Новости (с субтитрами)"
            secondTime="Давай поженимся"
            thirdTime="Другие новости"
            logo="./images/firstChannel.svg"
          />
          <Channel
            channelName="2х2"
            firstTime="МУЛЬТ ТВ. Сезон 4, 7 серия"
            secondTime="ПОДОЗРИТЕЛЬНАЯ СОВА. Сезон 7, 7 серия"
            thirdTime="БУРДАШЕВ. Сезон 1, 20 серия"
            logo="./images/2x2.svg"
          />
          <Channel
            channelName="РБК"
            firstTime="ДЕНЬ. Горючая смесь: как бороться с суррогатом на АЗС"
            secondTime="ДЕНЬ. Главные темы"
            thirdTime="Главные новости"
            logo="./images/rbc.svg"
          />
          <Channel
            channelName="AMEDIA PREMIUM"
            firstTime="Клиент всегда мёртв"
            secondTime="Голодные игры: Сойка-пересмешница. Часть I"
            thirdTime="Секс в большом городе"
            logo="./images/amedia.svg"
          />
          <Channel
            channelName="AMEDIA PREMIUM"
            firstTime="Клиент всегда мёртв"
            secondTime="Голодные игры: Сойка-пересмешница. Часть I"
            thirdTime="Секс в большом городе"
            logo="./images/amedia.svg"
          />
        </div>
      </Scrollbars>
    </div>
  );
};
