// This is the restaurants page component in which all the restaurants are shown
import AllRestaurants from "../components/AllRestaurants";
import HeroBanner from "../components/HeroBanner";

const restaurants = () => {
  return (
    <div>
      <HeroBanner />
      <AllRestaurants />
    </div>
  );
};

export default restaurants;
