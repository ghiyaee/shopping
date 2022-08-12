
import { useState, useEffect } from "react";
// import Shopping from "./Shopping"
import "./style/cart.css";
const Cart = ({img}) => {
  let [imgCurrent, setImag] = useState(0);
  const slide = { backgroundImage: `url(${img[imgCurrent]})` };
  const goToPerv = () => {
    imgCurrent > 0 ? setImag(imgCurrent - 1): setImag(img.length - 1)
  };
  const goToNext = () => {
    imgCurrent < img.length -1 ? setImag(imgCurrent + 1) :setImag(imgCurrent = 0)
  };
  const dotHandel = (index) => {
    setImag(index)
  }
  
  useEffect(() => {
   const resetTime=  setInterval(() => {
     goToNext()
    },3000)
    return () => {
      clearInterval(resetTime)
    }
  },[imgCurrent])
  return (
    <>
      <div className="wrrap">
        <div className="arrow-left" onClick={goToPerv}>
          <i className="fa-solid fa-circle-left"></i>
        </div>
        <div className="arrow-right" onClick={goToNext}>
          <i className="fa-solid fa-circle-right"></i>
        </div>
        <div className="slideStyle" style={slide}></div>
        <div className="dotStyle">
          {img.map((item, index) => (
            <div
              key={index}
              className="dotSelf"
              onClick={() => dotHandel(index)}
            >
              <i className="fa-solid fa-circle"></i>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Cart;
