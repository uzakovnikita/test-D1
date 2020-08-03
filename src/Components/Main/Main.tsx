import React, { Children } from 'react';
import {MainView} from './MainView/MainView';
import {MovieCard} from '../MovieCard/MovieCard';
import {GenreCard} from '../GenreCard/GenreCard';
import {Channel} from '../Channel/Channel';

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
        const content = this.state.tabs === 'films' ? (
            <div className="new">
                <div className="new__title">
                    <p className="new__text">Новинки</p>
                    <img src="" alt="" className="new__logo"/>
                </div>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <GenreCard/>
                <GenreCard/>
                <GenreCard/>
            </div>
        ) : (
            <div className="genres">
                <div className="genres__title">
                    <p className="genres__text">Жанры</p>
                </div>
                <Channel/>
                <Channel/>
                <Channel/>
                <Channel/>
            </div>
        )
        return <MainView handleClickOnFilms={this.handleClickOnFilms} handleClickOnChannels={this.handleClickOnChannels}>{content}</MainView>
    }
}
