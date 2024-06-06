
import { useContext } from "react";
import { Context } from "./context";
import { MdCancel } from "react-icons/md";

function Sidebar() {
  const { togglebar, setTogglebar } = useContext(Context);
  return (
    <main
      className={` bg-[#0000005a] sm:w-fit top-0 sm:static sm:bg-transparent fixed ${
        togglebar ? "w-full" : "w-0"
      } overflow-hidden h-full`}
      onClick={() => setTogglebar(false)}
    >
      <aside
        className={`h-screen ${
          togglebar ? "w-1/2" : "w-0"
        }  bg-white sm:bg-transparent transition duration-500 overflow-hidden sm:w-64  border-[1px] border-black  sm:static  absolute top-0 sm:h-[90vh] `}
      >
        <div className=" flex items-center justify-between p-10">
          sidebar
          <button
            className="sm:hidden text-2xl"
            onClick={() => setTogglebar(false)}
          >
            <MdCancel />
          </button>
        </div>
      </aside>
    </main>
  );
}

export default Sidebar;
