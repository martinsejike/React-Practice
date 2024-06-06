
          
  
  

 import React, { useContext } from "react";
import { MdMenu } from "react-icons/md";
// import { Link } from "react-router-dom";
import { Context } from "./context";

function Header() {

  const {setTogglebar,togglebar} = useContext(Context);
  const handleToggle =()=>{
    togglebar === "w-0"
    ? setTogglebar("w-1/2")
    : setTogglebar("w-0")
  }

  return (
    <div>
      <header className="  md:h-[15vh] h-[10vh] md:w-screen bg-black  ">
       
        <div className=" md:h-[15vh] h-[10vh] flex items-center justify-center">
          <div
            className="border-white border-2 md:h-[12vh] h-[8vh] px-8
          md:w-[90vw] w-screen  text-white  flex items-center justify-between"
          >
      
            <button className=" ">
              <MdMenu
                className="MdMenu text-4xl sm:hidden block  "
                onClick={handleToggle}
              />
            </button>
           
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header; 