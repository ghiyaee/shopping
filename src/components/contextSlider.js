import { createContext, useReducer } from "react";
import img1 from "../img/img-1.jpg"
import img2 from "../img/img-2.jpg"
import img3 from "../img/img-3.jpg"
import img4 from "../img/img-4.jpg"
const SliderContext = createContext();
const initailState = { 
    imgs: [img1, img2, img3, img4],
    counter:0
}
const reducer = (state, action) => {
    switch (action) {
        case 'GoToNext':
            return {
                ...state,
                counter: state.counter < state.imgs.length-1 ? state.counter + 1 : state.counter = 0
            }
            case 'GoToPerv':
                return {
                ...state,
                counter: state.counter > 0 ? state.counter - 1 : state.counter = state.imgs.length -1
            }
        default:
            return state
    }
}

const SliderProvider = ({ children }) => {
    
    const [Slider, Disptach] = useReducer(reducer, initailState)
    return(
        <SliderContext.Provider value={{sliders: Slider,disptachs:Disptach }} >
           {children}
        </SliderContext.Provider>
    )  
}
export  {SliderContext, SliderProvider}