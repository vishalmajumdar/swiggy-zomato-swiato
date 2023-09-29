// This is Header component where we use material tailwind components like navbar
import React from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  // icon for login
  const login = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4 mr-2"
    >
      <path
        fillRule="evenodd"
        d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
        clipRule="evenodd"
      />
    </svg>
  );

  // Navigation menu items using Typography component from material tailwind
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="transition-transform hover:scale-105 duration-500 text-md font-poppins p-1 font-normal hover:text-theme-color"
      >
        <NavLink
          onClick={() => setOpenNav(false)}
          to={"/"}
          className={({ isActive }) => (isActive ? "text-theme-color" : "")}
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="transition-transform hover:scale-105 duration-500 text-md font-poppins p-1 font-normal hover:text-theme-color"
      >
        <NavLink
          onClick={() => setOpenNav(false)}
          to={"/restaurants"}
          className={({ isActive }) => (isActive ? "text-theme-color" : "")}
        >
          Restaurants
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="transition-transform hover:scale-105 duration-500 text-md font-poppins p-1 font-normal  hover:text-theme-color"
      >
        <NavLink
          onClick={() => setOpenNav(false)}
          to={"/cuisines"}
          className={({ isActive }) => (isActive ? "text-theme-color" : "")}
        >
          Cuisines
        </NavLink>
      </Typography>
      <Typography
        onClick={() => setOpenNav(false)}
        as="li"
        variant="small"
        color="blue-gray"
        className="transition-transform hover:scale-105 duration-500 text-md font-poppins p-1 font-normal  hover:text-theme-color"
      >
        <NavLink
          onClick={() => setOpenNav(false)}
          to={"/contact"}
          className={({ isActive }) => (isActive ? "text-theme-color" : "")}
        >
          Contact
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    // Navbar component from material tailwind
    <Navbar className="mx-auto py-2 px-4 lg:px-8 lg:py-4 rounded-none shadow-sm">
      <div className="container mx-auto flex items-center justify-between text-theme-color">
        {/* This is logo or site title */}
        <Typography className="mr-4 cursor-pointer py-1.5 font-medium text-4xl font-playball">
          <NavLink onClick={() => setOpenNav(false)} to={"/"}>
            Swiato
          </NavLink>
        </Typography>
        {/* Here comes the Menu Items for Larger Screens */}
        <div className="hidden lg:block">{navList}</div>
        {/* Here is the login button */}{" "}
        <Link to={"/login"}>
          <Button
            className="transition-transform hover:scale-105 duration-500 font-poppins !hidden lg:!inline-block text-sm bg-theme-color"
            size="sm"
          >
            <span className="flex items-center align-middle">
              {login}
              Login
            </span>
          </Button>
        </Link>
        {/* This is button for Mobile Menu Navigation i.e., Hamburger */}
        <IconButton
          variant="text"
          className="ml-auto h-8 w-8 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {/* Condition to change the icon  */}
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentcolor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentcolor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      {/* Mobile Mennu navigation done using Collapse Component from Material Tailwind */}
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {/* This is the same menu list that we used for larger screens */}
          {navList}
          {/* Login Button for Mobile Menu Navigation */}
          <Link to={"/login"}>
            <Button
              onClick={() => setOpenNav(false)}
              size="sm"
              fullWidth
              className="font-poppins flex items-center justify-center mb-2 text-sm bg-theme-color"
            >
              <span className="flex items-center align-middle">
                {/* login svg icon */}
                {login}
                Login
              </span>
            </Button>
          </Link>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default Header;
