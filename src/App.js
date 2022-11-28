import React, { useEffect, useState } from "react";
import axios from "axios";
import "./index.scss";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Search from "./images/content/search.svg";
import Basket from "./components/Basket/Basket";
import Vector from './images/content/Vector.svg'

function App() {
  const [items, setItems] = useState([]); // data card's from request DB
  const [favorites, setIsFavorites] = useState([]);
  const [basketItems, setBasketItems] = useState([]); //data in basket after add card there
  const [basketOpened, setBasketOpened] = useState(false); //state on button "basket"
  const [search, setSearch] = useState("");

  // request to mockAPI for get Card's data
  useEffect(() => {
    // fetch("https://63813898786e112fe1c51691.mockapi.io/items")   //request with js method : fetch
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((json) => setItems(json));

    axios  //get request to MocAPI (get items)
      .get("https://63813898786e112fe1c51691.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });

    axios   //get request to MocAPI (get basket)
      .get("https://63813898786e112fe1c51691.mockapi.io/basket")
      .then((res) => {
        setBasketItems(res.data);
      });
  }, []);

  // add Card to basket 
  const onAddToCard = (obj) => {
    axios.post("https://63813898786e112fe1c51691.mockapi.io/basket", obj);
    setBasketItems((prev) => [...prev, obj]); //setBasketItems([...basketItems, obj])
  };

  // add Card to favorite 
  const onAddToFavorite = (obj) => {
    axios.post("https://63813898786e112fe1c51691.mockapi.io/favorites", obj);
    setIsFavorites((prev) => [...prev, obj]); 
  };

  // delete Card from Basket
  const onDeleteItem = (id) => {
    axios.delete(`https://63813898786e112fe1c51691.mockapi.io/basket/${id}`);
    setBasketItems((prev) => prev.filter(item => item.id !== id)); 
  };

  const onChangeSearchInput = (event) => {
    setSearch(event.target.value);
  };

  const onClearSearchInput = () => {
    setSearch(null);
  };

  return (
    <div className="wrapper">
      {basketOpened && (
        <Basket
          items={basketItems}
          onClose={() => setBasketOpened(false)}
          onDelete={onDeleteItem}
          key={basketItems.id}
        />
      )}
      <Header onClickBasket={() => setBasketOpened(true)} />
      <div className="content">
        <div className="content-header" style={{ marginBottom: "40px" }}>
          <h1 style={{ margin: "0" }}>
            {search ? `Search by request: '${search}'` : "All sneakers"}
          </h1>
          <div className="search-block">
            <img src={Search} alt="Search" />
            <input
              onChange={onChangeSearchInput}
              value={search}
              type="text"
              placeholder="Search..."
            />
            {search && (
              <img
                onClick={onClearSearchInput}
                className="button"
                src={Vector}
                alt="Clear"
              />
            )}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "10px"
            // justifyContent: "space-between",
          }}
        >
          {items
            .filter((items) =>
              items.title.toLowerCase().includes(search.toLowerCase())
            ) //filter by title, we are doing all search value and title value to LowerCase
            .map((item, index) => (
              <Card
                title={item.title}
                price={item.price}
                imageUrl={item.imageUrl}
                key={index}
                onPlus={onAddToCard}
                onFavorite={onAddToFavorite}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
