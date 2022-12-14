import React from 'react'
import Card from '../components/Card/Card';
import Vector from '../images/content/Vector.svg';
import Search from "../images/content/search.svg";
const Home = ({basketItems, search, items, onChangeSearchInput, onClearSearchInput, onAddToCard, onAddToFavorite }) => {
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
          margin: "10px",
          // justifyContent: "space-between",
        }}
      >
        {items
          .filter((items) =>
            items.title.toLowerCase().includes(search.toLowerCase())
          ) //filter by title, we are doing all search value and title value to LowerCase
          .map((item, index) => (
            <Card
              {...item}
              key={index}
              onPlus={onAddToCard}
              onFavorite={onAddToFavorite}
              added={basketItems.some(obj => Number(obj.id) === Number(item.id))}
            />
          ))}
      </div>
    </div>
  );
}

export default Home