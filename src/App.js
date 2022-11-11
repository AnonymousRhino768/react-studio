import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem"

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const[total, setTotal] = useState(0)
  const[cart, setCart] = useState([])

  function handleClick(name, price) {
    setTotal(total + price)
    setCart([...cart, name])
  }


  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <BakeryItem item = {item} handleClick={handleClick}/>
      ))}

      <div className="App">
        <h2>My Cart</h2>
        {/* TODO: render a list of items in the cart */}
        {cart.map((name) => (
          <p>{name}</p>
        ))}
        <p>Total Price: ${total}</p>
      </div>
    </div>
  );
}

export default App;
