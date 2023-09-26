import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";

export function DialogWithForm(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Button
        onClick={handleOpen}
        size="md"
        variant="text"
        className="!bg-theme-color font-poppins tracking-wider text-white outline-0 "
      >
        {props.label}
      </Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardHeader
            variant="gradient"
            className="bg-theme-color mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white" className="font-poppins">
              {props.label}
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4 font-poppins">
            <Input color="pink" label="Name" size="lg" />
            <Input color="pink" label="Phone" size="lg" />
            <Input color="pink" label="Order Details" size="lg" />
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              onClick={handleOpen}
              fullWidth
              className="bg-theme-color font-poppins tracking-wider"
            >
              Order
            </Button>
            <Typography
              variant="small"
              className="mt-6 flex justify-center font-poppins"
            >
              Come Back Again
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
