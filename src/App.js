import "./styles.css";
import Search from "./Search";
import Footer from "./Footer";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Search />
        <Weather defaultCity="Winnipeg" />
        <Footer />
      </div>
    </div>
  );
}
