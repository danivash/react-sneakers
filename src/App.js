import './index.scss';
import Header from "./components/Header/Header";
import Card from './components/Card/Card';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <h1 style={{ margin: "0", marginBottom: "40px" }}>All sneakers</h1>
        <div style={{ display: "flex" }}>
          <Card />
          <Card/> 
        </div>
      </div>
    </div>
  );
}

export default App;
