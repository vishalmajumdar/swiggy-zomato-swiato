import Banner from "./Banner";
import { Button } from "@material-tailwind/react";
import { Search } from "./Search";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="flex justify-center mt-12 mb-10 mx-4">
        <Search></Search>
      </div>
    </div>
  );
};

export default Home;
