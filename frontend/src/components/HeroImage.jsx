import { Typography } from "@material-tailwind/react";
import { useLocation } from "react-router-dom";

export const HeroImage = (props) => {
  const location = useLocation();
  const link = location.pathname;
  return (
    <div className="h-[200px] sm:h-[400px] w-full bg-[url('/assets/images/banner10.webp')] bg-center	 bg-cover flex items-center justify-center bg-blend-multiply	bg-[rgba(0,0,0,0.3)] p-4">
      <Typography variant="h1" className="font-poppins text-white text-center">
        {link === "/restaurants"
          ? "Restaurants"
          : link === "/cuisines"
          ? "Cuisines"
          : link === "/contact"
          ? "Contact"
          : "404 Not Found"}
      </Typography>
    </div>
  );
};
