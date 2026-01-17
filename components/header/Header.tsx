import { FaCode } from "react-icons/fa6";

type IProps = {
  onAboutClick: () => void
  onSkillsClick: () => void
  onProjectClick: () => void
  onContactClick: () => void
}

const Header = ({onAboutClick, onSkillsClick, onProjectClick,onContactClick}: IProps) => {
  return (
    <div className='fixed z-20 flex justify-around w-full p-3 bg-black top-0'>
      <div className='flex justify-center items-center gap-3 text-5xl'>
        <FaCode className="text-white bg-emerald-900 p-2 rounded-md" />
        <h1 className="text-white text-xl">Ezzaldeen</h1>
      </div>
      <div className='flex justify-center items-center gap-7 text-white '>
        <button className="cursor-pointer" onClick={onAboutClick}>About</button>
        <button className="cursor-pointer" onClick={onSkillsClick}>Skills</button>
        <button className="cursor-pointer" onClick={onProjectClick}>Project</button>
        <button className="cursor-pointer" onClick={onContactClick}>Contact</button>
      </div>
      <div className="flex justify-center items-center">
        <button onClick={onContactClick} className=" text-white bg-emerald-900 py-2 px-5 rounded-md cursor-pointer hover:bg-emerald-800">
            hire me
        </button>
      </div>
    </div>
  )
}

export default Header
