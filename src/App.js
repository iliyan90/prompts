import {
  Route,
  Routes,
} from "react-router-dom";
import Navbar from "./components/navigation/Navbar";
import MainPage from "./pages/MainPage/MainPage";
import Marketplace from "./pages/Marketplace/Marketplace";
import Generate from "./pages/Generate/Generate";
import Hire from "./pages/Hire/Hire";
import Login from "./pages/Login/Login";
import Sell from "./pages/Sell/Sell";
import "./styles.css";
import React from "react";
import SinglePrompt from "./pages/singlePrompt/SinglePrompt";
import UserProfile from "./pages/userProfile/UserProfile";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="/hire" element={<Hire />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/:id" element={<UserProfile />} />
        <Route path="/prompt/:id" element={<SinglePrompt />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
