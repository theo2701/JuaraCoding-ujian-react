import React from "react";
import { Outlet } from "react-router-dom";
import NavbarHeader from "./NavbarHeader";

const LayoutPage = () => {
  return (
    <React.Fragment>
      <NavbarHeader />
      <Outlet />
    </React.Fragment>
  );
};

export default LayoutPage;
