import "./styles.css";
import Header from "./Header";
import Footer from "./Footer";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <Weather defaultCity="Winnipeg" />
        <Footer />
      </div>
    </div>
  );
}
