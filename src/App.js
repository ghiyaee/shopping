import { MyProvider } from "./components/context";
import { ColorProvider } from "./components/colorContext";
import Shopping from "./components/Shopping";
import Cart from "../src/components/Cart";
const App = () => {
  return ( 
    <>
      <MyProvider>
         <ColorProvider>
            <Cart />
          </ColorProvider>
      </MyProvider>
    </>
     )
} 
export default App;