import React, { useEffect, useState } from "react";
import "./index.scss";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Search from "./images/content/search.svg";
import Basket from "./components/Basket/Basket";
import { logDOM } from "@testing-library/react";

function App() {
  const [items, setItems] = useState([]);
  const [basketItems, setBasketItems] = useState([]);
  const [basketOpened, setBasketOpened] = useState(false);

  // request to mockAPI for get Card's data
  useEffect(() => {
    fetch("https://63813898786e112fe1c51691.mockapi.io/items")
      .then((res) => {
        return res.json();
      })
      .then((json) => setItems(json));
  }, []);

  const onAddToCard = (obj) => {
   setBasketItems(prev => [...prev, obj]) //setBasketItems([...basketItems, obj])
  }


  return (
    <div className="wrapper">
      {basketOpened && (
        <Basket items={basketItems} onClose={() => setBasketOpened(false)} />
      )}
      <Header onClickBasket={() => setBasketOpened(true)} />
      <div className="content">
        <div className="content-header" style={{ marginBottom: "40px" }}>
          <h1 style={{ margin: "0" }}>All sneakers</h1>
          <div className="search-block">
            <img src={Search} alt="Search" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {items.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              key={item.price}
              onPlus={onAddToCard}
              onFavorite={console.log('d')}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
