import { useContext } from "react";
import { useLocation } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { RestaurantDetails } from "./RestaurantDetails";
import { AppContext } from "../App";

function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }

  return text.slice(0, maxLength) + "...";
}

export function RestaurantCard(props) {
  const location = useLocation();
  const link = location.pathname;
  const { allRestaurants } = useContext(AppContext);
  console.log();
  return (
    <Card className="mt-6">
      <CardHeader color="blue-gray" className={`relative h-56`} children={""}>
        <img
          src={`/assets/images${allRestaurants[props.id - 1].imageURL}`}
          alt=""
          className="object-cover object-center w-full h-full"
        />
      </CardHeader>
      <CardBody>
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 font-playfairDisplay text-center"
        >
          {allRestaurants[props.id - 1].name}
        </Typography>
        <Typography className="font-poppins text-center">
          {truncateText(allRestaurants[props.id - 1].description, 130)}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 text-center">
        {link !== "/" ? <RestaurantDetails id={props.id} /> : ""}
      </CardFooter>
    </Card>
  );
}
