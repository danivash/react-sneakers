import "./index.scss";
import Header from "./components/Header/Header";
import Card from "./components/Card/Card";
import Search from "./images/content/search.svg";
import Basket from "./components/Basket/Basket";
const arr = [
  {title: 'Man Sneakers: Nike Blazer Mid Suede1', price: 45, imageUrl: 'img/snk1.jpg'},
  {title: 'Man Sneakers: Nike Air Max 270', price: 45, imageUrl: 'img/snk2.jpg'},
  {title: 'Man Sneakers: Nike Blazer Mid', price: 30, imageUrl: 'img/snk3.jpg'},
  {title: 'Man Sneakers: Puma X Aka Boku Future Rider', price: 32, imageUrl: 'img/snk4.jpg'}
]
console.log(arr);
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
          imageUrl={obj.imageUrl}
          onClick={() => console.log(obj)}
          key={obj.price}
          />
        ))} 
         
        </div>
      </div>
    </div>
  );
}

export default App;
