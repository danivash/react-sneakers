import React, { useState } from "react";
import "./index.scss";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Search from "./images/content/search.svg";
import Basket from "./components/Basket/Basket";

function App() {

  const [items, setItems] =useState([
    {
     "title": "Man Sneakers: Nike Blazer Mid Suede1",
     "price": 45,
     "imageUrl": "img/snk1.jpg"
    },
    {
     "title": "Man Sneakers: Nike Air Max 270",
     "price": 45,
     "imageUrl": "img/snk2.jpg"
    },
    {
     "title": "Man Sneakers: Nike Blazer Mid",
     "price": 30,
     "imageUrl": "img/snk3.jpg"
    },
    {
     "title": "Man Sneakers: Puma X Aka Boku Future Rider",
     "price": 32,
     "imageUrl": "img/snk4.jpg"
    },
    {
      "title": "Man Sneakers: Nike Blazer Mid",
      "price": 30,
      "imageUrl": "img/snk3.jpg"
     }
   ]);
  const [basketOpened, setBasketOpened] = useState(false);

  return (
    <div className="wrapper">
     {basketOpened &&  <Basket onClose={() => setBasketOpened(false)}/>}
      <Header onClickBasket={() => setBasketOpened(true)} />
      <div className="content">
        <div className="content-header" style={{ marginBottom: "40px" }}>
          <h1 style={{ margin: "0" }}>All sneakers</h1>
          <div className="search-block">
            <img src={Search} alt="Search" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", "justifyContent": "space-between" }}>
        {items.map((obj) => (
          <Card 
          title={obj.title} 
          price={obj.price}
          imageUrl={obj.imageUrl}
          key={obj.price}
          />
        ))} 
         
        </div>
      </div>
    </div>
  );
}

export default App;
