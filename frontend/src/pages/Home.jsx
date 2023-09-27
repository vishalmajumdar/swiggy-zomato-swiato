// This is the Home component for root domain where we import components to give it a nice look
import HeroBanner from "../components/HeroBanner";
import FindRestaurant from "../components/FindRestaurant";

const Home = () => {
  return (
    <div>
      {/* Hero Banner Component */}
      <HeroBanner />
      {/* Container for Search Box to give some nice spacing */}
      <div className="flex justify-center mt-12 mb-10 mx-4">
        {/* Find Restaurant Component to Search Restaurant */}
        <FindRestaurant />
      </div>
    </div>
  );
};

export default Home;
