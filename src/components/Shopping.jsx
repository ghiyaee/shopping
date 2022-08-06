import { MyContext } from "./context";
import { useContext } from "react";
import {ColorContext} from './colorContext'
import "./style/shoping.css"
const Shopping = () => {
  const { countContext, countDisptach } = useContext(MyContext);
  const { colorChange, disptachChange } = useContext(ColorContext);
  console.log(colorChange);
  const handelActions = () => {
    if (countContext > 1) {
      return  <span className="trash" onClick={() => countDisptach("DECREMET")}> - </span>
    } else if (countContext == 0) {
         return 
      
    } else if(countContext==1) {
      return <i  onClick={() => countDisptach("DECREMET")} className="fa-solid fa-trash-can trash"></i>
    }
  }
    return (
      <div className="container">
        <div className="content">
          <h1>shopping cart (basket) with useContext and useReducer</h1>
          <div
            className={`row ${colorChange}`} >
            <span>
              <i className="fa-solid fa-apple-whole"></i>
            </span>
            <span onClick={() => countDisptach("INCREMET")}>+</span>
            <span>{countContext}</span>
            {handelActions()}
          </div>
          <i
            className={` fa-solid fa-arrows-rotate  `}
            onClick={() =>
              colorChange == " "
                ? disptachChange("COLOR_GHANGE")
                : disptachChange("COLOR_BACK")
            }
          ></i>
        </div>
      </div>
    );
};
export default Shopping;
