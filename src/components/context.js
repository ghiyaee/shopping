import { createContext,useReducer } from "react";
const initailState = {
    counter1: 0,
    total :0
} ;
const reducer = (state, action) =>{
    switch (action) {
        case 'INCREMET':
            return {
                ...state,
                counter1: state.counter1 + 1,
                total: state.total +1
            }
     
        case 'DECREMET':
            return {
                ...state,
                counter1:
                    state.counter1 > 0 ? state.counter1 - 1 : state.counter1 = 0,
                total:
                state.total > 0 ? state.total - 1 : state.total = 0
            }
        
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