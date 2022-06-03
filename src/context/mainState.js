import React, { useReducer } from 'react'
import MainContext from './mainContext';
import MainReducer from './mainReducer'

export default function MainState(props) {
    const initialState = {}
    const [state, setState] = useReducer(MainReducer, initialState);
   return (
    <MainContext.Provider value={{state}}>
        {props.children}
    </MainContext.Provider>
  )
}
