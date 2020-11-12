import React, { Component } from 'react';
import Routes from './routes'

import Header from './components/header'

import Main from './pages/main'

import './styles.css'

const App = () => (
      <div className="App">
      <Header />
      <Routes />
    </div>
    )

export default App;
