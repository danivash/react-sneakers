import React from 'react'
import Card from '../components/Card/Card';

const Favorite = ({items, onAddToFavorite}) => {
  return (
    <div className="content">
      <div className="content-header" style={{ marginBottom: "40px" }}>
        <h1 style={{ margin: "0" }}>My Favorites</h1>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: "10px",
          // justifyContent: "space-between",
        }}
      >
        {items.map((item, index) => (
          <Card
            favorite={true}
            key={index}
            // onPlus={onAddToCard}
            onFavorite={onAddToFavorite}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorite