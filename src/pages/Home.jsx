import React, { useContext } from 'react'
import Card from '../components/Card/Card';
import Search from "../images/content/search.svg";
// import { AppContext } from '../App';
const Home = ({basketItems, search, items, onChangeSearchInput, onClearSearchInput, onAddToCard, onAddToFavorite, isLoading }) => {


  const renderItems =  () => {

    //filter by title, we are doing all search value and title value to LowerCase
    const filteredItems = items.filter((items) =>
    items.title.toLowerCase().includes(search.toLowerCase()));
    return (isLoading ? [...Array(8)] : filteredItems)
    .map((item, index) => (
      <Card
        key={index}
        onPlus={onAddToCard}
        onFavorite={onAddToFavorite}
        // added={isItemAdded(item && item.id)}
        loading={isLoading}
        {...item}
      />
    ))
    }
  return (
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
              src={"img/Vector.svg"}
              alt="Clear"
            />
          )}
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: "10px",
          // justifyContent: "space-between",
        }}
      >
      {renderItems()}
      </div>
    </div>
  );
}

export default Home
