import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
  Card,
} from "@material-tailwind/react";
import { AppContext } from "../App";

export function RestaurantDetails(props) {
  const location = useLocation();
  const link = location.pathname;
  const { allRestaurants } = useContext(AppContext);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} className="bg-theme-color font-poppins">
        {link === "/" ? "Get Details" : "Read More"}
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader className="font-playfairDisplay flex justify-center">
          {allRestaurants[props.id - 1].name}
        </DialogHeader>
        <DialogBody className="font-poppins overflow-auto max-h-80 border">
          <figure className="relative h-96 w-full">
            <img
              className="h-full  w-full rounded-xl object-cover object-center"
              src={`/assets/images${allRestaurants[props.id - 1].imageURL}`}
              alt="restaurant"
            />
            <figcaption className="absolute bottom-4 left-2/4 flex w-[calc(100%-2rem)] -translate-x-2/4 justify-between rounded-xl border border-white bg-white/75 py-4 px-4 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
              <div>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="font-playfairDisplay"
                >
                  Cuisine
                </Typography>
                <Typography
                  color="gray"
                  className="mt-2 font-normal font-poppins"
                >
                  {allRestaurants[props.id - 1].cuisineTypes.join(", ")}
                </Typography>
              </div>
              <div>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="font-playfairDisplay"
                >
                  Specialties
                </Typography>
                <Typography
                  color="gray"
                  className="mt-2 font-normal font-poppins"
                >
                  {allRestaurants[props.id - 1].specialties.join(", ")}
                </Typography>{" "}
              </div>
            </figcaption>
          </figure>
          <Typography
            variant="h4"
            color="blue-gray"
            className="mt-8 font-playfairDisplay text-center"
          >
            Description
          </Typography>
          <Card className="my-4 p-4">
            {allRestaurants[props.id - 1].description}
          </Card>
          <Typography
            variant="h4"
            color="blue-gray"
            className="font-playfairDisplay text-center"
          >
            Contact
          </Typography>
          <Card className="my-4 p-4">
            <ul>
              <li className="font-poppins">
                <span className="font-bold"> Address -{"\u00A0"}</span>
                {"\u00A0"}
                {allRestaurants[props.id - 1].address}
              </li>
              <li className="font-poppins">
                <span className="font-bold"> Phone Number -{"\u00A0"}</span>
                {"\u00A0"}
                {allRestaurants[props.id - 1].phoneNumber}
              </li>
              <li className="font-poppins">
                <span className="font-bold"> Menu -{"\u00A0"}</span> Under
                Cooking
              </li>
            </ul>
          </Card>

          <Typography
            variant="h4"
            color="blue-gray"
            className="font-playfairDisplay text-center"
          >
            Opening Hours
          </Typography>
          <Card className="my-4 p-4">
            <ul>
              {Object.entries(allRestaurants[props.id - 1].openingHours).map(
                ([day, hours]) => (
                  <li key={day} className="font-poppins">
                    <span className="font-bold">
                      {" "}
                      {day} :{"\u00A0"}
                    </span>{" "}
                    {hours}
                  </li>
                )
              )}
            </ul>
          </Card>

          <Typography
            variant="h4"
            color="blue-gray"
            className="font-playfairDisplay text-center"
          >
            Reviews
          </Typography>
          <Card className="mt-4 p-4">
            <ul>
              {allRestaurants[props.id - 1].reviews.map((review) => (
                <li key={review.id} className="flex my-4 items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 22 22"
                    fill="currentColor"
                    className="w-10 h-10 mr-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <div>
                    <span className="font-bold">
                      {review.name} - {review.rating}/5
                    </span>
                    <br />
                    {review.comment}
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </DialogBody>
        <DialogFooter className="flex justify-center gap-2">
          <Link to={`tel:${allRestaurants[props.id - 1].phoneNumber}`}>
            <Button className="bg-theme-color font-poppins" color="green">
              <span>Call</span>
            </Button>
          </Link>
          <Button
            className="bg-theme-color font-poppins"
            color="green"
            onClick={handleOpen}
          >
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
