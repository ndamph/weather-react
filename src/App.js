import "./styles.css";
import Header from "./Header";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Header defaultCity="Winnipeg" />
        <Footer />
      </div>
    </div>
  );
}
