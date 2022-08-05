import { MyContext } from "./context";
import { useContext } from "react";
import "./style/shoping.css"
const Shopping = () => {
  const { countContext, countDisptach } = useContext(MyContext);

  const handel = () => {
    if (countContext > 1) {
      return  <span className="trash" onClick={() => countDisptach("decrement")}> - </span>
    } else if (countContext == 0) {
         return 
      
    } else if(countContext==1) {
      return <i onClick={() => countDisptach("decrement")} className="fa-solid fa-trash-can"></i>
    }
  }
    return (
      <div className="container">
        <div className="content">
          <h1>shopping cart with  useContext and useReducer</h1>
          <div className="row">
            <span>
              <i className="fa-solid fa-apple-whole"></i>
            </span>
            <span onClick={() => countDisptach("increment")}>+</span>
            <span>{countContext}</span>
            <span> { handel() }
            </span>
          </div>
        </div>
      </div>
    );
};
export default Shopping;






  // let num = 2
    // const condic = () => {
    //     if (num ==1) {
    //       return  <i className="fa-solid fa-trash-can"></i>
    //     } else if (num > 1) {
    //       return  <span>-</span>
    //     }
    // }