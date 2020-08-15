import React from 'react';
import './App.css';
import {Header} from './components/Header'
import {Balance} from './components/Balance'
import {AccountSummary} from './components/AccountSummary'
import {TransectionHistory} from './components/TransectionHistory'


function App() {
  return (
    <div>
            <Header /> 
        <div className="container"> 
            <Balance />
        </div>
        <div> 
             <AccountSummary />
        </div>
        <div> 
             <TransectionHistory />
        </div>
     </div>
  );
}

export default App;
