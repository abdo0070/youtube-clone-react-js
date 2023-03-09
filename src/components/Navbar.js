import React, { useState } from "react";
import { Stack } from "@mui/system";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../utils/constants";
import {SearchBar} from "../components";
import { backgroundColor_dark } from "../utils/colors";


const Navbar = () => {
  return (
    <>
      <Stack
        direction={"row"}
        alignItems="center"
        p={2}
        sx={{
          position: "sticky",
          background: `${backgroundColor_dark}`,
          top: 0,
          justifyContent: "space-between",
        }}>
           <Link to={'/'} style = { {display:'flex' , alignItems:'center' } } >
            <img src={logo} alt="logo" height={45} />
           </Link>
           <SearchBar />
        </Stack>
    </>
  );
};

export default Navbar;
