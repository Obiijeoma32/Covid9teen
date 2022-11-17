import "./App.css";
import Header from "./components/Header";
import Tracker from "./components/Tracker";
import Countries from "./components/Countries";
import Prevention from "./components/Prevention";
import Symptoms from "./components/Symptoms";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/symptom" element={<Symptoms />} />
        <Route path="/prevention" element={<Prevention />} />
        <Route path="/footer" element={<Footer />} />
      </Routes> */}
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
