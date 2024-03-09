import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { FaChevronRight } from "react-icons/fa";
import Cards from "../components/Cards";
import Card from "../components/Card";

const Home = () => {
  return (
    <div className="max-w-[1024px] mx-auto bg-[#FBFCFD] min-h-[100vh] p-2 break-words">
      {/* section 1  start  */}
      <div className="my-5 ">
        <h1 className="heading my-5">Best Website builders in the US</h1>
        <div className="minNav  flex justify-between items-center gap-2 flex-wrap p-2.5 border-t-[2px] border-b-[2px] border-[#E1E4E6]">
          <div className="itemwrapper flex gap-4 flex-wrap">
            <div className="item flex">
              <CiCircleCheck className="mx-2" fontSize={"20px"} /> Last Updated-
              February 22, 2020{" "}
            </div>
            <div className="item flex">
              <CiCircleInfo className="mx-2" fontSize={"20px"} />
              Advertising Disclosure
            </div>
          </div>

          <div className="item flex ">
            Top Relevant <IoIosArrowDown className="mx-2" fontSize={"20px"} />
          </div>
        </div>

        <div className="tagsNav2 flex gap-4 my-4  flex-wrap gap-2 ">
          <div className="tags px-2.5"> Tools</div>
          <div className="tags px-2.5"> AWS Builder</div>
          <div className="tags px-2.5"> Start Build</div>
          <div className="tags px-2.5"> Build Supplies</div>
          <div className="tags px-2.5"> Tooling</div>
          <div className="tags px-2.5"> BlueHosting</div>
        </div>

        <div className="location my-4 flex justify-start items-center flex-wrap gap-2  ">
          <div className="places flex items-center ">
            Home <FaChevronRight className="mx-2" />
          </div>

          <div className="places flex items-center ">
            Hosting for all <FaChevronRight className="mx-2" />
          </div>

          <div className="places flex items-center ">
            Hosting <FaChevronRight className="mx-2" />
          </div>

          <div className="places flex items-center ">
            Hosting6 <FaChevronRight className="mx-2" />
          </div>

          <div className="places flex items-center ">Hosting5</div>
        </div>
      </div>
      {/* Section 1 end  */}
      {/* section 2 start  */}
      <Cards />
      {/* section 2 end  */}
      {/* section3 starrt  */}
      <div className="minCards mb-4 mt-16">
        <h1 className="minCardHead">Related deals you might like for</h1>
      </div>
      <div className="Mincards flex gap-8 flex-wrap lg:flex-nowrap justify-center items-center ">
        <Card />
        <Card />
        <Card />       
      </div>
      {/* section 3 end  */}

  {/* section 4 */}
  <div className="searching flex justify-center items-center mt-28 min-h-16 gap-8 flex-wrap lg:flex-nowrap lg:justify-between ">
    <div className="left lg:w-[40%] ">
        <div className="leftheading text-[#5C6874] text-[32px]">Sign up and get exclusive special deals</div>
    </div>
    <div className="right h-[100%] lg:w-[60%]">
      
        <div className="searchWrap flex justify-between h-[3rem] ">
        <input type="text" className="h-[100%] border w-[100%] rounded-tl-xl rounded-bl-xl"/>
        <p className="bg-[#1B88F4] flex justify-center items-center test-white h-[100%] px-4 rounded-tr-xl rounded-br-xl"> Search</p>
        </div>

    </div>
  </div>
  {/* section 4 end  */}



      <br />
      <br /> <br /> <br /> <br /> <br /> <br /> <br />
    </div>
  );
};

export default Home;
