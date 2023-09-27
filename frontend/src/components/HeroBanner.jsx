// This is the Hero Banner component to enclose the top Hero slider/carousel/image/video
import { HeroCarousel } from "./HeroCarousel";
import { HeroImage } from "./HeroImage";
import { useLocation } from "react-router-dom";

const HeroBanner = () => {
  const location = useLocation();
  const link = location.pathname;
  return (
    <div>
      {/* Hero Carousel component for Homepage */}
      {link === "/" ? <HeroCarousel /> : <HeroImage />}
    </div>
  );
};

export default HeroBanner;
