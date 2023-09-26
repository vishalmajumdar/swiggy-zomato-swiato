import React from "react";
import { Input, Button } from "@material-tailwind/react";

export function Search() {
  const [email, setEmail] = React.useState("");
  const onChange = ({ target }) => setEmail(target.value);

  return (
    <div className="relative flex w-full max-w-[24rem]">
      <Input
        size="lg"
        color="pink"
        label="Find Your Restaurant"
        value={email}
        onChange={onChange}
        className="pr-20 shadow-lg shadow-gray-900/5"
        containerProps={{
          className:
            "min-w-0 focus:!outline-none focus:!ring focus:!border-blue-500",
        }}
      />
      <Button
        size="sm"
        color={email ? "gray" : "blue-gray"}
        disabled={!email}
        className="!absolute right-1.5 top-1.5 rounded bg-theme-color font-poppins tracking-wide"
      >
        Search
      </Button>
    </div>
  );
}
