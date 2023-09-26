// This is the FindRestaurant Component which is made using Input component taken from Material Tailwind
import React from "react";
import { Input, Button } from "@material-tailwind/react";

export default function FindRestaurant() {
  const [restaurant, setRestaurant] = React.useState("");
  const onChange = ({ target }) => setRestaurant(target.value);

  return (
    <div className="relative flex w-full max-w-[24rem]">
      {/* Input component for Searching Restaurant */}
      <Input
        size="lg"
        color="pink"
        label="Find Your Restaurant"
        value={restaurant}
        onChange={onChange}
        className="pr-20 shadow-lg shadow-gray-900/5"
        containerProps={{
          className:
            "min-w-0 focus:!outline-none focus:!ring focus:!border-blue-500",
        }}
      />
      <Button
        size="sm"
        color={restaurant ? "gray" : "blue-gray"}
        disabled={!restaurant}
        className="!absolute right-1.5 top-1.5 rounded bg-theme-color font-poppins tracking-wide"
      >
        Search
      </Button>
    </div>
  );
}
