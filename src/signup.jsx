import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from ".context'";


function Signup() {
  const navigate = useNavigate();
  const [error, seterror] = useState(false);
  const { name, setName } = useContext(Context);

  const handleinput = (event) => {
    setName(event.target.value);
    seterror(false);
  };
  const handlesubmit = (event) => {
    event.preventDefault();
    name.trim() === "" ? seterror(true) : navigate("/home");
  };

  return (
    <main className="h-[100vh] ">
      <form className=" h-[70vh] flex flex-col items-center w-full">
        <h1 className="font-bold text-2xl py-11 h-[45vh]">SIGN UP</h1>
        <div className=" h-[28vh] ">
          <p className="font-semibold text-lg h-[5vh]">Name</p>
          <div className="grid gap-6 w-[50vw]">
            <div>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={handleinput}
                className="border-gray-500 border-[1px] rounded-md py-2 px-3 w-[49vw] h-[9vh]"
              />
              {error && (
                <p className="text-red-700 text-sm">
                  Please enter a valid name before you chop serious beating
                </p>
              )}
            </div>

            <div className="flex justify-center">
              <button
                onClick={handlesubmit}
                className="bg-green-600 h-[8.6vh] font-medium  text-lg text-white w-[28vw]
          rounded-md py-3 px-3"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}

export default Signup;
