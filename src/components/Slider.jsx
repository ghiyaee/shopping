import { useContext, useEffect } from "react";
import { SliderContext } from "./contextSlider";
import "./style/cart.css";
const SliderBar = () => {
  const { sliders, disptachs } = useContext(SliderContext);
  console.log(sliders.counter);
  const { imgs, counter } = sliders;
  const slide = { backgroundImage: `url(${imgs[counter]})` };
  useEffect(() => {
    const reset = setInterval(() => {

      disptachs("goToNext");
    }, 3000)
    return () => {
      clearInterval(reset)
    }
  },[counter])
  return (
    <>
      <div className="wrrap">
        <div className="arrow-left" onClick={() => disptachs("goToPerv")}>
          <i className="fa-solid fa-circle-left"></i>
        </div>
        <div className="arrow-right" onClick={() => disptachs("goToNext")}>
          <i className="fa-solid fa-circle-right"></i>
        </div>
        <div className="slideStyle" style={slide}></div>
        <div className="dotStyle">
        </div>
      </div>
    </>
  );
}
 
export default SliderBar;