import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { RestaurantCard } from "./RestaurantCard";
import { RestaurantDetails } from "./RestaurantDetails";
import { Input, Button } from "@material-tailwind/react";
import { AppContext } from "../App";

const DisplayFilteredRestaurants = () => {
  // Access the restaurant data from the context
  const { allRestaurants } = useContext(AppContext);
  const [searchResults, setSearchResults] = useState(allRestaurants);

  //   Function to search/filter restaurants
  const filterRestaurants = (input) => {
    const filteredRestaurants = allRestaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(input.toLowerCase())
    );
    setSearchResults(filteredRestaurants);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full max-w-[24rem] mb-6">
        {/* Input component for Searching Restaurant */}
        <Input
          size="lg"
          color="pink"
          label="Find Your Restaurant"
          onChange={(e) => filterRestaurants(e.target.value)}
          className="shadow-lg shadow-gray-900/5"
        />
      </div>
      <div className="mx-4 my-10">
        <div className="flex flex-wrap gap-8 justify-center">
          {searchResults.map((restaurant) => (
            <div
              className="basis-[100%] sm:basis-[40%] lg:basis-[30%]"
              key={restaurant.id}
            >
              <RestaurantCard id={restaurant.id} />
            </div>
          ))}
        </div>
        {searchResults.length === 1 ? (
          searchResults.map((restaurant) => (
            <div key={restaurant.id} className="flex justify-center mt-8">
              <RestaurantDetails id={restaurant.id} />
            </div>
          ))
        ) : (
          <div className="flex justify-center mt-8">
            <a href="/restaurants">
              <Button className="flex items-center gap-3 bg-theme-color font-poppins tracking-wider">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                  />
                </svg>
                Browse All
              </Button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default DisplayFilteredRestaurants;
