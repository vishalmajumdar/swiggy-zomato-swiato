import {
  Carousel,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

export function CarouselWithContent() {
  return (
    <Carousel
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      loop="true"
      //   autoplay="false"
      //   autoplayDelay={2500}
      transition={{ duration: 1.5 }}
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
      <div className="relative min-h-screen sm:min-h-[400px] w-full">
        <img
          src="/banner1.webp"
          alt="image 1"
          className="h-screen w-full sm:h-[400px] object-cover"
        />
        <div className="absolute inset-0 grid h-screen w-full place-items-center bg-black/75 p-5 sm:h-[400px]">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-2xl md:text-4xl lg:text-5xl"
            >
              Discover the Flavors of Excellence
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-6 opacity-80"
            >
              Indulge in a culinary journey like no other. Explore a world of
              delectable dishes.
            </Typography>
            <div className="flex justify-center gap-2 flex-col	 sm:flex-row">
              <Button
                size="md"
                variant="outline"
                className="!bg-theme-color font-poppins tracking-wider"
              >
                Order Now
              </Button>
              <Button
                size="md"
                color="white"
                variant="text"
                className="font-poppins tracking-wider"
              >
                View Menu
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative min-h-screen sm:min-h-[400px] w-full">
        <img
          src="/banner2.webp"
          alt="image 1"
          className="h-screen w-full sm:h-[400px] object-cover"
        />
        <div className="absolute inset-0 grid h-screen w-full place-items-center bg-black/75 p-5 sm:h-[400px]">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-2xl md:text-4xl lg:text-5xl"
            >
              Savor Every Bite, Every Moment
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-6 opacity-80"
            >
              Experience the perfect blend of taste and ambiance.
            </Typography>
            <div className="flex justify-center gap-2 flex-col	 sm:flex-row">
              <Button
                size="md"
                variant="outline"
                className="!bg-theme-color font-poppins tracking-wider"
              >
                Book a Table
              </Button>
              <Button
                size="md"
                color="white"
                variant="text"
                className="font-poppins tracking-wider"
              >
                Our Specialties
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative min-h-screen sm:min-h-[400px] w-full">
        <img
          src="/banner3.webp"
          alt="image 1"
          className="h-screen w-full sm:h-[400px] object-cover"
        />
        <div className="absolute inset-0 grid h-screen w-full place-items-center bg-black/75 p-5 sm:h-[400px]">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-2xl md:text-4xl lg:text-5xl"
            >
              Bringing Food to Your Doorstep
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-6 opacity-80"
            >
              Craving your favorite meal at home? We've got you covered.
            </Typography>
            <div className="flex justify-center gap-2 flex-col	 sm:flex-row">
              <Button
                size="md"
                variant="outline"
                className="!bg-theme-color font-poppins tracking-wider"
              >
                Order Delivery
              </Button>
              <Button
                size="md"
                color="white"
                variant="text"
                className="font-poppins tracking-wider"
              >
                Explore Deals
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
