import React from "react";
import { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";

export function RestaurantDetails(props) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button onClick={handleOpen} className="bg-theme-color font-poppins">
        Read More
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader className="font-playfairDisplay">
          {props.name}
        </DialogHeader>
        <DialogBody divider className="font-poppins overflow-auto max-h-80">
          <Typography className="font-poppins">{props.description}</Typography>
        </DialogBody>
        <DialogFooter>
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
