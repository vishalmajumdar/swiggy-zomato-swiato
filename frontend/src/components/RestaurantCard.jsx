import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { RestaurantDetails } from "./RestaurantDetails";

function truncateText(text, maxLength) {
  if (text.length <= maxLength) {
    return text;
  }

  return text.slice(0, maxLength) + "...";
}

export function RestaurantCard(props) {
  return (
    <Card className="mt-6">
      <CardHeader
        color="blue-gray"
        className="relative h-56 bg-[url('/banner3.webp')] bg-cover"
        children={""}
      />
      <CardBody>
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 font-playfairDisplay text-center"
        >
          {props.name}
        </Typography>
        <Typography className="font-poppins text-center">
          {truncateText(props.description, 130)}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 text-center">
        <RestaurantDetails name={props.name} description={props.description} />
      </CardFooter>
    </Card>
  );
}
