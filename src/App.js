import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import "./index.scss";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Search from "./images/content/search.svg";
import Basket from "./components/Basket/Basket";
import Vector from './images/content/Vector.svg'
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";

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

    axios  //get data from MocAPI (get items)
      .get("https://63813898786e112fe1c51691.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
      });

    axios   //get data from MocAPI (get basket)
      .get("https://63813898786e112fe1c51691.mockapi.io/basket")
      .then((res) => {
        setBasketItems(res.data);
      });

      
    axios   //get data from MocApI (get favorites)
      .get("https://63813898786e112fe1c51691.mockapi.io/favorites")
      .then((res) => {
        setIsFavorites(res.data);
    });
  }, []);

  // add Card to basket 
  const onAddToCard = (obj) => {
    axios.post("https://63813898786e112fe1c51691.mockapi.io/basket", obj);
    setBasketItems((prev) => [...prev, obj]); //setBasketItems([...basketItems, obj])
  };

  // add Card to favorite 
  const onAddToFavorite = async (obj) => {
try {
  if(favorites.find(favObj => favObj.id === obj.id)) {
    axios.delete(`https://63813898786e112fe1c51691.mockapi.io/favorites/${obj.id}`);
    setIsFavorites((prev) => prev.filter(item => item.id !== obj.id)); 
  } else {
    const {data} = await axios.post("https://63813898786e112fe1c51691.mockapi.io/favorites", obj);
    setIsFavorites((prev) => [...prev, data]);
  }
} catch (error) {
  alert("Error, can't add to Favorite")
}



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
          key={basketItems.index}
        />
      )}
      <Header onClickBasket={() => setBasketOpened(true)} />

      <Routes>
        <Route path="/" exact element={<Home 
          items={items}
          search={search}
          onChangeSearchInput={onChangeSearchInput}
          onClearSearchInput={onClearSearchInput}
          onAddToCard={onAddToCard}
          onAddToFavorite={onAddToFavorite}

        />}></Route>
        <Route path="/favorites" 
        element={<Favorite
          items={favorites}
          onAddToFavorite={onAddToFavorite}
        />}></Route>
      </Routes>
    </div>
  );
}

export default App;
