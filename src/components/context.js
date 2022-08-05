import { createContext,useReducer } from "react";
const initailState = 0 ;
const reducer = (state, action) =>{
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return   state > 0 ? state - 1: state = 0
        default:
            return state  
    }
}
const MyContext = createContext();
const MyProvider = ({ children }) => {

   const[count,dispatch]=useReducer(reducer,initailState)
    return (
        <MyContext.Provider value={{countContext: count,countDisptach: dispatch}}>
            {children}
       </MyContext.Provider>
    )
}
export{MyContext,MyProvider}