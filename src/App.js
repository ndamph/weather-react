import "./styles.css";
import Search from "./Search";
import Footer from "./Footer";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <Search />
        <Weather />
        <Footer />
      </div>
    </div>
  );
}
