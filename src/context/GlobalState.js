import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//create the initial state
const initialState = {
    transections : [
        {"id": 1, "description": "Income 1", "transectionAmount": 1000},
        {"id": 2, "description": "Expense 1", "transectionAmount": 500},
        {"id": 3, "description": "Income 2", "transectionAmount": 900},
        {"id": 4, "description": "Expense 2", "transectionAmount": 850},
        ]
}

//create global context 
export const GlobalContext = createContext(initialState);

//create a provider for the Global Context
export const GlobalProvider = ({children}) => {
    // eslint-disable-next-line
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return (

        <GlobalContext.Provider value = {
            {
                 transections: state.transections
            }
        }>

                   {children}

             </GlobalContext.Provider>
    )
}