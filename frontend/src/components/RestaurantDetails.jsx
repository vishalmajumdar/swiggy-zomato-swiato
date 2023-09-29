import React from "react";
import { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
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
        <DialogHeader>{props.name}</DialogHeader>
        <DialogBody divider>{props.description}</DialogBody>
        <DialogFooter>
          <Button className="bg-theme-color" color="green" onClick={handleOpen}>
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
