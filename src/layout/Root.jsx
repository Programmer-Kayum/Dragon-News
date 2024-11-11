import React from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="lg:max-w-6xl lg:mx-auto mx-2">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;