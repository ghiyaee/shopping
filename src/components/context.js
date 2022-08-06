import { createContext,useReducer } from "react";
const initailState = {
    counter: 0,
    total :0
} ;
const reducer = (state, action) =>{
    switch (action) {
        case 'INCREMET':
            return {
                ...state,
                counter: state.counter + 1,
                total: state.total + 1
            }
     
        case 'DECREMET':
            return {
                ...state,
                counter:
                    state.counter > 0 ? state.counter - 1 : state.counter = 0,
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