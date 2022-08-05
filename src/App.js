import { MyProvider } from "./components/context";
import Shopping from "./components/Shopping";
const App = () => {
  return ( 
    <>
      <MyProvider>
        <Shopping/>
      </MyProvider>
    </>
     )
} 
export default App;