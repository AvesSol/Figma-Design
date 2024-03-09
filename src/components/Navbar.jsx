import React from "react";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="min-h-16 py-2 bg-[#212731]  flex justify-center items-center gap-11 flex-wrap">
      <div className="search flex justify-start items-center"><CiSearch className="mx-2" fontSize={"1.2rem"}/> 
      <input type="text" className="h-full w-[100%] outline-none  rounded-lg" /></div>
      <div className="links">Categories</div>
      <div className="links">Website Builders</div>
      <div className="links">Today's deals</div>
    </div>
  );
};

export default Navbar;
