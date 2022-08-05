import { MyProvider } from "./components/context";
import Shopping from "./components/Shopping";
import Cart from "../src/components/Cart";
const App = () => {
  return ( 
    <>
      <MyProvider>
        <Cart/>
      </MyProvider>
    </>
     )
} 
export default App;