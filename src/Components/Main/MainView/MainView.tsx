import React, { FunctionComponent } from 'react';

interface Props {
    handleClickOnFilms: () => void
    handleClickOnChannels: () => void
}

export const MainView: FunctionComponent<Props> = (props: Props) => {
    const tabs = <div className="tabs">
        <p className="tabs__films" onClick={props.handleClickOnFilms}>Фильмы</p>
        <p className="tabs__channels" onClick={props.handleClickOnChannels}>Телеканалы</p>
    </div>
}