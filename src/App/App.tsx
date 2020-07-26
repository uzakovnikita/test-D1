import React from 'react';
import './App.scss';

import { MovieCard } from '../Components/MovieCard/MovieCard';
import { GenreCard } from '../Components/GenreCard/GenreCard';
import {Header} from '../Components/Header/Header';
import { AppContext } from './AppContext';


interface Props {};
interface State {
  userName: string,
  handleChangeUserNameApp: Function,
  handleChangeAutorized: Function,
  autorized: string
}

export class App extends React.Component<Props, State> {
  handleChangeUserNameApp: (name: string) => void;
  handleChangeAutorized: (autorized: React.MouseEvent) => void 
  constructor (props: any) {
    super(props);
    this.handleChangeUserNameApp = (name) => {
      this.setState({
        userName: name,
      })
    }
    this.handleChangeAutorized = (autorized) => {
      console.log('aaa')
      const newStatus = this.state.autorized === 'not' ? 'yes' : 'not';
      this.setState({
        autorized: newStatus
      })
    }
    this.state = {
      userName: '',
      autorized: 'not',
      handleChangeAutorized: this.handleChangeAutorized,
      handleChangeUserNameApp: this.handleChangeUserNameApp
    }
  }
  render () {
    return (
      <AppContext.Provider value = {{
        userName: this.state.userName,
        autorized: this.state.autorized,
        handleChangeAutorized: this.handleChangeAutorized,
        handleChangeUserNameApp: this.handleChangeUserNameApp,
      }}>
        <div className="App">
          <Header />
        </div>
      </AppContext.Provider>  
    );
  }
}