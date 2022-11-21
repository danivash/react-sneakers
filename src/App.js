import './index.scss';
import Header from "./components/Header/Header";
import Card from './components/Card/Card';
import Search from './images/content/search.svg';
import Vector from './images/content/Vector.svg';
import Sneakers from './images/sneakers/nike_green.jpg'
function App() {
  return (
    <div className="wrapper">
      <div className="overlay">
        <div className="right-wrapper">
          <h2>Basket</h2>

          <div className="items">
            <div className="basketItem">
              <img width={70} height={70} src={Sneakers} alt="Sneakers" />
              <div style={{ marginLeft: "15px" }}>
                <p>Man Sneakers: Nike Blazer Mid Suede</p>
                <b>45$</b>
              </div>
              <button>
                <img src={Vector} alt="Remove" />
              </button>
            </div>
            <div className="basketItem">
              <img width={70} height={70} src={Sneakers} alt="Sneakers" />
              <div style={{ marginLeft: "15px" }}>
                <p>Man Sneakers: Nike Blazer Mid Suede</p>
                <b>45$</b>
              </div>
              <button>
                <img src={Vector} alt="Remove" />
              </button>
            </div>
          </div>

          <ul>
            <li>
              <span>Total:</span>
              <div></div>
              <b>45$</b>
            </li>
            <li>
              <span>Charge 10%:</span>
              <div></div>
              <b>4$</b>
            </li>
          </ul>
        </div>
      </div>
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
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
