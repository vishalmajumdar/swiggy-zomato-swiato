import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
  Collapse,
} from "@material-tailwind/react";

export function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const myAccountIcon = (
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
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="transition-transform hover:scale-105 duration-500 text-md font-poppins p-1 font-normal hover:text-theme-color"
      >
        <a href="#" className="flex items-center">
          About
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="transition-transform hover:scale-105 duration-500 text-md font-poppins p-1 font-normal hover:text-theme-color"
      >
        <a
          href="https://www.geeksforgeeks.org/courses/full-stack-node"
          className="font-poppins flex items-center hover:text-theme-color"
          target="_blank"
        >
          GeeksforGeeks
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="transition-transform hover:scale-105 duration-500 text-md font-poppins p-1 font-normal  hover:text-theme-color"
      >
        <a
          href="https://github.com/vishalmajumdar/swiggy-zomato-swiato"
          className="flex items-center"
          target="_blank"
        >
          GitHub
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto py-2 px-4 lg:px-8 lg:py-4 rounded-none shadow-sm">
      <div className="container mx-auto flex items-center justify-between text-theme-color">
        <Typography
          as="a"
          href="/"
          className="mr-4 cursor-pointer py-1.5 font-medium text-4xl font-playball"
        >
          Swiato
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <Button
          className="transition-transform hover:scale-105 duration-500 font-poppins !hidden lg:!inline-block text-sm bg-theme-color"
          size="sm"
        >
          <span className="flex items-center align-middle">
            {myAccountIcon}
            My Account
          </span>
        </Button>
        <IconButton
          variant="text"
          className="ml-auto h-8 w-8 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
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
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          <Button
            size="sm"
            fullWidth
            className="font-poppins flex items-center justify-center mb-2 text-sm bg-theme-color"
          >
            <span className="flex items-center align-middle">
              {myAccountIcon}
              My Account
            </span>
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
}
