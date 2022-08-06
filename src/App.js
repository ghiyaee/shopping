import { MyProvider } from "../src/components/context";
import { ColorProvider } from "../src/components/colorContext";
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