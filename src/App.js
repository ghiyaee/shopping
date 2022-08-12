// import { MyProvider } from "../src/components/context";
// import { ColorProvider } from "../src/components/colorContext";
import { SliderProvider } from "./components/contextSlider";
import "../src/components/style/app.css"
import SliderBar from "./components/Slider";
const App = () => {
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