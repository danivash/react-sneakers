import "./index.scss";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Search from "./images/content/search.svg";
import Basket from "./components/Basket/Basket";

const arr = [
  {title: 'Man Sneakers: Nike Blazer Mid Suede1', price: 20},
  {title: 'Man Sneakers: Nike Blazer Mid Suede2', price: 45},
  {title: 'Man Sneakers: Nike Blazer Mid Suede3', price: 12}
]

function App() {
  return (
    <div className="wrapper">
      <Basket/>
      <Header />
      <div className="content">
        <div className="content-header" style={{ marginBottom: "40px" }}>
          <h1 style={{ margin: "0" }}>All sneakers</h1>
          <div className="search-block">
            <img src={Search} alt="Search" />
            <input type="text" placeholder="Search..." />
          </div>
        </div>

        <div style={{ display: "flex" }}>
        {arr.map((obj) => (
          <Card 
          title={obj.title} 
          price={obj.price}
          />
        ))} 
         
        </div>
      </div>
    </div>
  );
}

export default App;
