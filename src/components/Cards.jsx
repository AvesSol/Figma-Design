import React from "react";
import carddata from "../data";
import { IoIosArrowDown } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import { TfiCup } from "react-icons/tfi";
import { IoCheckmarkDoneCircle } from "react-icons/io5";

const Cards = () => {
  return (
    <div class>
      {carddata.map((item) => (
        <div className="card bg-white rounded-lg relative w-[100%] flex justify-between my-14 min-h-[255px] flex-wrap lg:flex-nowrap">
          <div className="count absolute  top-[2.5rem] left-[-1rem] text-[1.2rem] flex justify-center items-center bg-[white] text-[#626E79] z-20">
            1
          </div>

          {item.tag && (
            <div
              className="tag1 absolute  top-[-1rem] left-[-1rem] flex gap-2 text-[16px] 
          justify-center items-center bg-[#FF7724] text-white p-[4px]  rounded-br-xl rounded-tr-xl"
            >
              <TfiCup /> <span>{item.tag} </span>
            </div>
          )}

          <div className="image  flex h-[100%] items-center justify-center w-[100%] lg:w-[45%] mt-20">
            <img className="w-[141px] h-[103px]" src="/images/img.svg" alt="" />
          </div>

          <div className="Middlecontent text-[16px] mx-6 h-[100%]">
            <div className="heading1">
              <span className="font-bold leading-7"> {item.title1}</span>{" "}
              <span className="des1 leading-7">{item.des1}</span>
            </div>

            <div className="heading2 ">
              <span className="font-bold leading-7"> {item.title2}</span>
              <br />
              {item.type != "modern" ? (
                <div className="des2 leading-7 pl-4">{item.des2}</div>
              ) : (
                <>
                  <div className="pink bg-[#FFF4ED] sm:ml-8 w-[80%] p-1 rounded-lg">
                    <div className="list">
                      <span className="text-blue-400 mr-4">{item.l1.rat}</span>{" "}
                      <span>{item.l1.title}</span>
                    </div>
                    <div className="list">
                      <span className="text-blue-400 mr-4">{item.l2.rat}</span>{" "}
                      <span>{item.l2.title}</span>
                    </div>
                    <div className="list">
                      <span className="text-blue-400 mr-4">{item.l3.rat}</span>{" "}
                      <span>{item.l3.title}</span>
                    </div>
                  </div>
                  <h1 className="my-4">Why us</h1>
                  <div className="">
                    <div className="list flex gap-2">
                      <span>
                        <IoCheckmarkDoneCircle color="0855A1" />
                      </span>{" "}
                      <span>{item.L1}</span>
                    </div>
                    <div className="list flex gap-2">
                      <span>
                        <IoCheckmarkDoneCircle color="0855A1" />
                      </span>{" "}
                      <span>{item.L2}</span>
                    </div>
                    <div className="list flex gap-2">
                      <span>
                        <IoCheckmarkDoneCircle color="0855A1" />
                      </span>{" "}
                      <span>{item.L3}</span>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="showMore text-[#1B88F4] flex items-center gap-2 mt-3">
              showm more <IoIosArrowDown color=" #1B88F4" />
            </div>
          </div>

          <div className="reviews h-[100%] flex flex-col justify-center gap-10 items-center w-[100%] lg:w-auto ">
            <div className="reviewDiv p-2 flex  flex-col gap-3 justify-center items-center rounded-br-lg rounded-bl-lg bg-[#F3F9FF]">
              <div className="top text-[32px] text-[#074786] relative">
                9.8{" "}
                <span className="absolute top-0 right-[-1rem] text-sm">
                  {" "}
                  <CiCircleInfo />{" "}
                </span>{" "}
              </div>
              <div className="middle text-[14px] text-[#074786] flex">
                <FaStar color="yellow" />
                <FaStar color="yellow" />
                <FaStar color="yellow" />
                <FaStar color="yellow" />
                <FaStar color="yellow" />
              </div>
              <div className="bottom"> {item.comment}</div>
            </div>
            <button className="btn mt-auto text-[1rem] text-[white]">
              View
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
