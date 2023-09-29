// This is the Home component for root domain where we import components to give it a nice look
import HeroBanner from "../components/HeroBanner";
import DisplayFilteredRestaurants from "../components/DisplayFilteredRestaurants";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* Hero Banner Component */}
      <HeroBanner />
      {/* Container for Search Box to give some nice spacing */}
      <div className="flex flex-col mt-12 mb-10 mx-4">
        {/* Find Restaurant Component to Search Restaurant */}
        <DisplayFilteredRestaurants />
      </div>
    </div>
  );
};

export default Home;
