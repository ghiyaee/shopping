import { MyContext } from "./context";
import { useContext,useEffect } from "react";
import {ColorContext} from './colorContext'

import "./style/shoping.css"
const Shopping = () => {
  const { countContext, countDisptach } = useContext(MyContext);

  const { colorChange, disptachChange } = useContext(ColorContext);
  console.log(countContext.counter);
  const handelActions = () => {
    if (countContext.counter > 1) {
     
      return  <span className="trash" onClick={() => countDisptach("DECREMET")}> - </span>
    } else if (countContext.counter == 0) {
         return 
      
    } else if(countContext.counter==1) {
      return <i  onClick={() => countDisptach("DECREMET")} className="fa-solid fa-trash-can trash"></i>
    }
  }
  useEffect(() => {
      colorChange == " "
        ? disptachChange("COLOR_GHANGE")
        : disptachChange("COLOR_BACK");
  },[])
    return (
      <div className="container">
        <div className="content">
          <h1>shopping cart (basket) with useContext and useReducer</h1>
          <div className={`row ${colorChange}`}>
            <i className="fa-solid fa-basket-shopping"></i>
            <span>
              <i className="fa-solid fa-apple-whole"></i>
            </span>
            <span onClick={() => countDisptach("INCREMET")}>+</span>
            <span>{countContext.counter}</span>
            {handelActions()}
          </div>
          <p>total:{countContext.total}</p>
          <i
            className={` fa-solid fa-arrows-rotate  `}
            onClick={() =>
              colorChange == " "
                ? disptachChange("COLOR_GHANGE")
                : disptachChange("COLOR_BACK")
            }
          >
            color
          </i>
        </div>
      </div>
    );
};
export default Shopping;
