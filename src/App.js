import React from 'react';
import './App.css';
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {AccountSummary} from './components/AccountSummary'
import {TransectionHistory} from './components/TransectionHistory'
import {AddTransection} from './components/AddTransection'



function App() {
  return (
    <div>
            <Header /> 
        <div className="container"> 
            <Balance />
            <AccountSummary />
            <TransectionHistory />
            <AddTransection />
        </div>
    </div>
  );
}

export default App;
