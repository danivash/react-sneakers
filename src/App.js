import React, { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import "./index.scss";
import Header from "./components/Header/Header";
import Basket from "./components/Basket/Basket";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";


export const AppContext = createContext({})


function App() {
  const [items, setItems] = useState([]); // data card's from request DB
  const [favorites, setIsFavorites] = useState([]);
  const [basketItems, setBasketItems] = useState([]); //data in basket after add card there
  const [basketOpened, setBasketOpened] = useState(false); //state on button "basket"
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);


  // request to mockAPI for get Card's data
  useEffect(() => {
    // fetch("https://63813898786e112fe1c51691.mockapi.io/items")   //request with js method : fetch
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((json) => setItems(json));
    async function getData() {
      //async function get Data from MockAPI
      setIsLoading(true);

      const basketResponse = await axios.get(
        "https://63813898786e112fe1c51691.mockapi.io/basket"
      );
      const favoritesResponse = await axios.get(
        "https://63813898786e112fe1c51691.mockapi.io/favorites"
      );
      const itemsResponse = await axios.get(
        "https://63813898786e112fe1c51691.mockapi.io/items"
      );

      setIsLoading(false);

      setBasketItems(basketResponse.data);
      setIsFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }

    getData();
  }, []);




  // add Card to basket
  const onAddToCard = async (obj) => {
    const findItem =basketItems.find((item) => Number(item.parentId) === Number(obj.id))
    if (findItem) {
      axios.delete(
        `https://63813898786e112fe1c51691.mockapi.io/basket/${obj.id}`
      );
      setBasketItems((prev) =>
        prev.filter((item) => Number(item.parentId) !== Number(obj.id))
      );
     await axios.delete(`https://63813898786e112fe1c51691.mockapi.io/basket/${findItem.id}`);
    } else {
      setBasketItems((prev) => [...prev, obj]); //setBasketItems([...basketItems, obj])
      const {data} = await axios.post("https://63813898786e112fe1c51691.mockapi.io/basket", obj);
      setBasketItems((prev) => prev.map(item => {
      return item.parentId === data.parentId ? {...item, id: data.id } : item;
      })); 

    }
  };

  // add Card to favorite
  const onAddToFavorite = async (obj) => {
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `https://63813898786e112fe1c51691.mockapi.io/favorites/${obj.id}`
        );
        setIsFavorites((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
      } else {
        const { data } = await axios.post(
          "https://63813898786e112fe1c51691.mockapi.io/favorites",
          obj
        );
        setIsFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Error, can't add to Favorite");
    }
  };

  // delete Card from Basket
  const onDeleteItem = (id) => {
    axios.delete(`https://63813898786e112fe1c51691.mockapi.io/basket/${id}`);
    setBasketItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearch(event.target.value);
  };

  const onClearSearchInput = () => {
    setSearch(null);
  };


  const isItemAdded = (id) => {
    return basketItems.some(obj => Number(obj.parentId) === Number(id))
  }
  

  return (
    <div className="wrapper">
     
      <AppContext.Provider value={{items, basketItems, setBasketItems, setBasketOpened, favorites, onAddToFavorite, isItemAdded}}>
        <Basket
          items={basketItems}
          onClose={() => setBasketOpened(false)}
          onDelete={onDeleteItem}
          opened={basketOpened}
        />
        <Header onClickBasket={() => setBasketOpened(true)} />

        <Routes>
          <Route
            path=""
            exact
            element={
              <Home
                basketItems={basketItems}
                items={items}
                search={search}
                onChangeSearchInput={onChangeSearchInput}
                onClearSearchInput={onClearSearchInput}
                onAddToCard={onAddToCard}
                onAddToFavorite={onAddToFavorite}
                isLoading={isLoading}
              />
            }
          ></Route>
          <Route
            path="favorites"
            element={
              <Favorite/>
            }
          ></Route>
        </Routes>
      </AppContext.Provider>
    </div>
  );
}

export default App;
