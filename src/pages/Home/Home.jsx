import React from "react";
import LeftSide from "../shared/LeftSide/LeftSide";
import RIghtSide from "../shared/RightSide/RIghtSide";
import Header from "../shared/Header/Header";
import Navbar from "../shared/Navbar/Navbar";
import BreakingNews from "./BreakingNews";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:mt-16 mt-5">
        <div>
          <LeftSide></LeftSide>
        </div>
        <div className="md:col-span-2">
          <h2>News .........</h2>
        </div>
        <div>
          <RIghtSide></RIghtSide>
        </div>
      </div>
    </div>
  );
};

export default Home;
