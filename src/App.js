// import { MyProvider } from "../src/components/context";
// import { ColorProvider } from "../src/components/colorContext";
import Cart from "../src/components/Cart";
import "../src/components/style/app.css"
const App = () => {
  const img = [
    { url: 'http://localhost:3000/img-1.jpg', titel: 'img-1' },
    { url: 'http://localhost:3000/img-2.jpg', titel: 'img-2' },
    { url: 'http://localhost:3000/img-3.jpg', titel: 'img-3' },
    { url: 'http://localhost:3000/img-4.jpg', titel: 'img-4' },
       
  ]

  return ( 
    <div className="container">
      <h1> sliders</h1>
      <div className="content">
        <Cart img={img} />
      </div>
    </div>
      
     )
} 
export default App;