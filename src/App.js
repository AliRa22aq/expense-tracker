import React from 'react';
import './App.css';
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {AccountSummary} from './components/AccountSummary'

function App() {
  return (
    <div>
      <Header /> 
      <div className="container"> 
      <Balance />
      </div>
      <AccountSummary />
    </div>
  );
}

export default App;
