import { useState, useContext } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { Typography, Button, Spinner } from "@material-tailwind/react";
import { AppContext } from "../App";

const AllRestaurants = () => {
  const { allRestaurants } = useContext(AppContext);

  const [visibleRestaurants, setVisibleRestaurants] = useState(6); // Initial number of visible restaurants

  const [showSpinner, setShowSpinner] = useState(false); // State to control spinner visibility

  // Function to load more restaurants
  const loadMoreRestaurants = () => {
    setVisibleRestaurants(
      (prevVisibleRestaurants) => prevVisibleRestaurants + 6
    );
  };

  // Function to fetch more restaurants
  const fetchMoreRestaurants = () => {
    setShowSpinner(true); // Show spinner when loading more restaurants
    // Simulate a delay to show the spinner for 2 seconds
    setTimeout(() => {
      setVisibleRestaurants(
        (prevVisibleRestaurants) => prevVisibleRestaurants + 6
      );
      setShowSpinner(false); // Hide spinner after loading more restaurants
    }, 750); // Adjust the duration as needed (in milliseconds)
  };

  return (
    <div className="m-12 flex flex-col items-center">
      <Typography
        variant="h2"
        className="font-playfairDisplay mb-[60px] text-white bg-theme-color text-center px-4 py-2 rounded-xl shadow-lg mx-3 text-xl sm:text-3xl md:text-4xl"
      >
        Feast Your Eyes on Choices
      </Typography>
      <div className="flex flex-wrap gap-8 justify-center">
        {allRestaurants.slice(0, visibleRestaurants).map((restaurant) => (
          <div
            className="basis-[100%] sm:basis-[40%] lg:basis-[30%]"
            key={restaurant.id}
          >
            <RestaurantCard id={restaurant.id} />
          </div>
        ))}
        {visibleRestaurants < allRestaurants.length && (
          <div className="mt-4">
            <Button
              className="font-poppins bg-theme-color"
              onClick={fetchMoreRestaurants}
            >
              {showSpinner ? <Spinner size="sm" /> : "Load More"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllRestaurants;
