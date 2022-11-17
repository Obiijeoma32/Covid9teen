import "./App.css";
import Header from "./components/Header";
import Tracker from "./components/Tracker";
import Countries from "./components/Countries";
import Prevention from "./components/Prevention";
import Symptoms from "./components/Symptoms";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />

      <Tracker />
      <Countries />
      <Symptoms />
      <Prevention />
      <Footer />
    </>
  );
}

export default App;
