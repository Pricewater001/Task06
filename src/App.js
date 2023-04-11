import { useContext } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import ValueContext from "./components/context";
import CatContent from "./components/FoxContent";
import DuckContent from "./components/DuckContent";
import { Route, Routes } from "react-router-dom";

function App() {
  const context = useContext(ValueContext);

  return (
    <div className="App">
      <Header />
      <ValueContext.Provider value={ValueContext}>
        <Routes>
          <Route path="Dogs" element={<MainContent />} />
          <Route path="Fox" element={<CatContent />} />
          <Route path="Rice" element={<DuckContent />} />
        </Routes>
      </ValueContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
