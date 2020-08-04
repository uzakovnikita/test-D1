import React from 'react';
import { MainFilmsView } from './MainView/MainFilmsView';
import { MainChannelsView } from './MainView/MainChannelsView'
import './MainView/MainView.scss'
import cn from 'classnames';


interface Props {}
interface State {
    tabs: string
}
export class Main extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            tabs: 'films'
        }
    }
    handleClickOnFilms = () => {
        this.setState({
            tabs: 'films'
        })
    }
    handleClickOnChannels = () => {
        this.setState({
            tabs: 'channels'
        })
    }
    render() {
        const klassFilmsButton = cn({
            'tabs__button': true,
            'tabs__button_onSet': this.state.tabs === 'films'
        })
        const klassChannelsButton = cn({
            'tabs__button': true,
            'tabs__button_onSet': this.state.tabs === 'channels'
        })
        const klassFilmsTabsLine = cn({
            'tabs__line': true,
            'tabs__line_not-vision': this.state.tabs !== 'films'
        })
        const klassChannelsTabsLine = cn({
            'tabs__line': true,
            'tabs__line_not-vision': this.state.tabs !== 'channels'
        })
        const tabs = (<div className="tabs">
                        <div className="tabs__button-container">
                            <button className={klassFilmsButton} onClick={this.handleClickOnFilms}>Фильмы</button>
                            <hr className={klassFilmsTabsLine}/>
                        </div>
                        <div className="tabs__button-container">
                            <button className={klassChannelsButton} onClick={this.handleClickOnChannels}>Телеканалы</button>
                            <hr className={klassChannelsTabsLine}/>
                        </div>
                    </div>)
        const content = this.state.tabs === 'films' ? <MainFilmsView /> : <MainChannelsView />       
        const result = (<main>
                            {tabs}
                            {content}
                        </main>)     
        return result;    
    }
}
