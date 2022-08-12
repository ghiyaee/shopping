// import { MyProvider } from "../src/components/context";
// import { ColorProvider } from "../src/components/colorContext";
import { SliderProvider } from "./components/contextSlider";

import Slider from "./components/Slider";
import Cart from "../src/components/Cart";
import "../src/components/style/app.css"
import img1 from "../src/img/img-1.jpg"
import img2 from "../src/img/img-2.jpg"
import img3 from "../src/img/img-3.jpg"
import img4 from "../src/img/img-4.jpg"
import SliderBar from "./components/Slider";
const App = () => {
  const img = [
    img1,
    img2,
    img3,
    img4
  ]

  return ( 
    <SliderProvider>
    <div className="container">
      <h1> Slider With React useReducer and useContext ane useEffect</h1>
      <div className="content">
          {/* <Cart img={img} /> */}
          <SliderBar/>
      </div>
    </div>
     </SliderProvider>
      
     )
} 
export default App;