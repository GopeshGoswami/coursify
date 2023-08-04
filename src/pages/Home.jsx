import React from "react";
import Sidebar from "../components/Sidebar";
import Cards from "../components/Home/Cards";

const Home = () => {
  return (
    <div className="flex mt-10 ">
      <Sidebar />
      <Cards />
    </div>
  );
};

export default Home;
