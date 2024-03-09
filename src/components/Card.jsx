import React from "react";

const Card = () => {
  return (
    <div className="w-[333px] min-h-[425px] flex justify-center items-center flex-col gap-2 bg-white rounded-lg ">
      <div className="top p-3">
        <img className="w-[141px] h-[103px]" src="/images/img.svg" alt="" />
      </div>
      <div className="discount flex justify-start items-center gap-2 text-xs my-2 w-[100%] text-left">
        <span className=" rounded-lg bg-[#F2F4F7] text-[#074786] px-4 py-1.5">
          20%
        </span>
        <span className=" rounded-lg bg-[#F2F4F7] text-[#074786] px-4 py-1.5">
          Limited Time
        </span>
      </div>
      <div className="heading23 text-[#626E79] font-bold w-[100%] text-center">
        {" "}
        Webbuilder 1
      </div>
      <div className="des text-[#626E79] text-[1rem] w-[100%] text-left">
        Computer Modern clasic with wix support
      </div>
      <div className="princes flex  w-[100%] text-left my-2">
        <span className="text-[#5C6874] text-[20px]">$39.96</span>{" "}
        <sub>$49.96</sub>
        <span className="text-red-400  mt-2 text-xs mx-2">(20% off)</span>
      </div>
        <button className="btn mt-auto text-[1rem] py-2 text-[white] w-[100%]">View Deal</button>
    
    </div>
  );
};

export default Card;
