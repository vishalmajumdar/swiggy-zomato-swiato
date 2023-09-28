import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

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
          {props.description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0 text-center">
        <Button className="font-poppins bg-theme-color">Read More</Button>
      </CardFooter>
    </Card>
  );
}
