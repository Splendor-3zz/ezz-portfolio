import Link from "next/link";
import { FaCode } from "react-icons/fa6";
import { IoIosArrowRoundBack } from "react-icons/io";

const HeaderTwo = () => {
  return (
    <div className="fixed z-20 flex justify-between w-full p-3 bg-black top-0">
      <Link
        className="flex items-center p-1 hover:text-white hover:bg-emerald-950 border border-emerald-900 w-fit rounded-md"
        href={"/"}
      >
        <IoIosArrowRoundBack />
        <h1 className="text-sm sm:text-l">home page</h1>
      </Link>
      <Link className="flex justify-center items-center gap-3" href={"/"}>
        <FaCode className="bg-emerald-900 p-2 rounded-md text-4xl sm:text-5xl" />
        <h1 className="text-sm sm:text-xl">Ezzaldeen</h1>
      </Link>
    </div>
  );
};

export default HeaderTwo;
