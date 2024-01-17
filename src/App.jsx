import MainHeader from "./components/MainHeader";
import "./App.css";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="main__container">
      <MainHeader />
      <main>
        <ProductDetails/>
      </main>
    </div>
  );
}

export default App;
