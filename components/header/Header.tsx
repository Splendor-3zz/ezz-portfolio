import Link from "next/link";
import { FaCode } from "react-icons/fa6";

const Header = () => {
  return (
    <div className='fixed z-20 flex justify-around w-full h-["10%"] p-3 bg-black top-0'>
      <div className='flex justify-center items-center gap-3 text-5xl'>
        <FaCode className="bg-emerald-900 p-2 rounded-md" />
        <h1 className="text-xl">Ezzaldeen</h1>
      </div>
      <div className='flex justify-center items-center gap-7'>
        <Link href={"/about"}>About</Link>
        <Link href={"/project"}>Project</Link>
        <Link href={"/skills"}>Skills</Link>
        <Link href={"/contact"}>Contact</Link>
      </div>
      <div className="flex justify-center items-center">
        <button className=" text-white bg-emerald-900 py-2 px-5 rounded-md cursor-pointer hover:bg-emerald-800">
            hire me
        </button>
      </div>
    </div>
  )
}

export default Header
