import { MyContext } from "./context";
import { useContext,useEffect } from "react";
import {ColorContext} from './colorContext'

import "./style/shoping.css"
const Shopping = () => {
  const { countContext, countDisptach } = useContext(MyContext);
  const { colorChange, disptachChange } = useContext(ColorContext);
  const handelActions = () => {
    if (countContext.counter1 > 1 || countContext.counter2 > 1) {
      return (
        <span className="trash" onClick={() => countDisptach("DECREMET1")}>
        </span>
      );
    } else if (countContext.counter1 == 0) {
      return;
    } else if (countContext.counter1 == 1) {
      return (
        <i
          onClick={() => countDisptach("DECREMET1")}
          className="fa-solid fa-trash-can trash"
        ></i>
      );
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
            <span onClick={() => countDisptach("INCREMET1")}>+</span>
            <span>{countContext.counter1}</span>
            {handelActions()}
          </div>

          <div className={`row ${colorChange}`}>
            <i className="fa-solid fa-basket-shopping"></i>
            <span>
              <i className="fa-solid fa-apple-whole"></i>
            </span>
            <span onClick={() => countDisptach("INCREMET2")}>+</span>
            <span>{countContext.counter2}</span>
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
