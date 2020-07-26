import React from 'react';

export const AppContext = React.createContext({ 
    userName: '',
    autorized: '',
    handleChangeUserNameApp: (name: string) => {},
    handleChangeAutorized: (autorized: React.MouseEvent) => {},
  });