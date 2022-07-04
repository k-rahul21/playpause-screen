import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
