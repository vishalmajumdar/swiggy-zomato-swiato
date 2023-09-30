// This is the main file and the first import is used for Routing or calling different URLs and getting different UIs
import { createContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Restaurants from "./pages/Restaurants";
import Contact from "./pages/Contact";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import getAllRestaurants from "./data/restaurants.json";

export const AppContext = createContext();

function App() {
  const [allRestaurants, setAllRestaurants] = useState(getAllRestaurants);
  return (
    <>
      <AppContext.Provider value={{ allRestaurants }}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </AppContext.Provider>
    </>
  );
}

export default App;
