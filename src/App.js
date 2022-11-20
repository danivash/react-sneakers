import './index.scss';
import Header from "./components/Header/Header";
import Card from './components/Card/Card';
import Search from './images/content/search.svg';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="content-header" style={{marginBottom: "40px"}}>
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
