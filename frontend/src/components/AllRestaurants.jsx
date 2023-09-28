import { useState, useEffect } from "react";
import { RestaurantCard } from "./RestaurantCard";
import { Typography, Button, Spinner } from "@material-tailwind/react";

const AllRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleRestaurants, setVisibleRestaurants] = useState(6); // Initial number of visible restaurants

  const [showSpinner, setShowSpinner] = useState(false); // State to control spinner visibility

  // Function to load more restaurants
  const loadMoreRestaurants = () => {
    setVisibleRestaurants(
      (prevVisibleRestaurants) => prevVisibleRestaurants + 6
    );
  };

  useEffect(() => {
    // Fetch the JSON data
    fetch("/restaurants.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the response body as JSON
      })
      .then((data) => {
        // Update state with the fetched data
        setRestaurants(data);
        setIsLoading(false);
      })
      .catch((error) => {
        // Handle any errors that occurred during fetch
        setError(error);
        setIsLoading(false);
      });
  }, []);

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

  if (isLoading) {
    return (
      <div className="m-12 flex flex-col items-center">
        <Typography
          variant="h2"
          className="ont-playfairDisplay mb-[60px] text-white bg-theme-color text-center px-4 py-2 rounded-xl shadow-lg mx-3"
        >
          Loading...
        </Typography>
      </div>
    );
  }

  if (error) {
    return (
      <div className="m-12 flex flex-col items-center">
        <Typography
          variant="h2"
          className="ont-playfairDisplay mb-[60px] text-white bg-theme-color text-center px-4 py-2 rounded-xl shadow-lg mx-3"
        >
          Error: {error.message}
        </Typography>
      </div>
    );
  }

  return (
    <div className="m-12 flex flex-col items-center">
      <Typography
        variant="h2"
        className="font-playfairDisplay mb-[60px] text-white bg-theme-color text-center px-4 py-2 rounded-xl shadow-lg mx-3"
      >
        Feast Your Eyes on Choices
      </Typography>
      <div className="flex flex-wrap gap-8 justify-center">
        {restaurants.slice(0, visibleRestaurants).map((restaurant) => (
          <div
            className="basis-[100%] sm:basis-[40%] lg:basis-[30%]"
            key={restaurant.id}
          >
            <RestaurantCard
              name={restaurant.name}
              description={restaurant.description}
            />
          </div>
        ))}
        {visibleRestaurants < restaurants.length && (
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
