// This is the Home component for root domain where we import components to give it a nice look
import Header from "../components/Header";
import HeroBanner from "../components/HeroBanner";
import FindRestaurant from "../components/FindRestaurant";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      {/* Header Component */}
      <Header />
      {/* Hero Banner Component */}
      <HeroBanner />
      {/* Container for Search Box to give some nice spacing */}
      <div className="flex justify-center mt-12 mb-10 mx-4">
        {/* Find Restaurant Component to Search Restaurant */}
        <FindRestaurant />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
