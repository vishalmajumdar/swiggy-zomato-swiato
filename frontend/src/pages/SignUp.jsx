import { Link } from "react-router-dom";
import { Card, Input, Button, Typography } from "@material-tailwind/react";

export default function SignUp() {
  return (
    <>
      <Card
        color="transparent"
        shadow={false}
        className="font-poppins my-20 mx-8 flex flex-col items-center"
      >
        <Typography
          variant="h4"
          color="blue-gray"
          className="font-poppins text-[#333] lg:text-4xl"
        >
          Sign Up
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Name" color="pink" />
            <Input size="lg" label="Email" color="pink" />
            <Input type="password" size="lg" label="Password" color="pink" />
          </div>

          <Button
            className="mt-6 bg-theme-color font-poppins tracking-wider"
            fullWidth
          >
            Sign Up
          </Button>
          <Typography
            color="gray"
            className="mt-4 text-center font-normal font-poppins"
          >
            Already have an account?{" "}
            <Link
              to={"/signin"}
              className="font-medium font-poppins text-theme-color"
            >
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </>
  );
}
