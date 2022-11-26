import React, { useEffect, useState } from "react";
import "./index.scss";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Search from "./images/content/search.svg";
import Basket from "./components/Basket/Basket";
import { logDOM } from "@testing-library/react";

function App() {
  const [items, setItems] = useState([]); // data card's from request DB
  const [basketItems, setBasketItems] = useState([]); //data in basket after add card there
  const [basketOpened, setBasketOpened] = useState(false); //state on button "basket" 
  const [search, setSearch] = useState('');

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


  const onChangeSearchInput = (event) => {
    console.log(event.target.value);
    setSearch(event.target.value);
  }

  return (
    <div className="wrapper">
      {basketOpened && (
        <Basket items={basketItems} onClose={() => setBasketOpened(false)} />
      )}
      <Header  onClickBasket={() => setBasketOpened(true)} />
      <div className="content">
        <div className="content-header" style={{ marginBottom: "40px" }}>
          <h1 style={{ margin: "0" }}>{search ? `Search by request: '${search}'` : 'All sneakers'}</h1>
          <div className="search-block">
            <img src={Search} alt="Search" />
            <input onChange={onChangeSearchInput} value={search} type="text" placeholder="Search..." />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {items.map((item, index) => (
            <Card
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              key={index}
              onPlus={onAddToCard}
              // onFavorite={d}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
