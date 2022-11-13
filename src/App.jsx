import { useState } from "react";
import "./App.css";
import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";
import pic from "./assets/profile.jpg";

function App() {
  return (
    <div className="App">
      <img src={pic} alt="Profile image" />
      <Info />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
