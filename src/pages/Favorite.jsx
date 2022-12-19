import React from 'react'

const Favorite = () => {
  return (
      <div className="content">
        <div className="content-header" style={{ marginBottom: "40px" }}>
          <h1 style={{ margin: "0" }}>
            My Favorites
          </h1>
         
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            margin: "10px",
            // justifyContent: "space-between",
          }}
        >
    Favorites
        </div>
      </div>
  );
}

export default Favorite