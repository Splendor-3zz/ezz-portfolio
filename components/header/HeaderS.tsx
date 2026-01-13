import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CiMenuKebab } from "react-icons/ci";
import { FaCode } from "react-icons/fa6";

type IProps = {
  onAboutClick: () => void
  onSkillsClick: () => void
  onProjectClick: () => void
  onContactClick: () => void
}

export function HeaderS({onAboutClick, onSkillsClick, onProjectClick,onContactClick}: IProps) {
  return (
    <div className="fixed z-20 flex justify-between items-center w-full p-3 bg-black top-0">
      <div className="flex justify-center items-center gap-3 text-5xl">
        <FaCode className="bg-emerald-900 p-2 rounded-md" />
        <h1 className="text-xl">Ezzaldeen</h1>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className=" hover:text-white hover:bg-emerald-950 border border-emerald-900 cursor-pointer"><CiMenuKebab /></Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-36 bg-emerald-950 p-0 " align="end">
          <DropdownMenuItem className="p-0.5"><button className="cursor-pointer border w-full rounded-md" onClick={onAboutClick}>About</button></DropdownMenuItem>
          <DropdownMenuItem className="p-0.5"><button className="cursor-pointer border w-full rounded-md" onClick={onSkillsClick}>Skills</button></DropdownMenuItem>
          <DropdownMenuItem className="p-0.5"><button className="cursor-pointer border w-full rounded-md" onClick={onProjectClick}>Project</button></DropdownMenuItem>
          <DropdownMenuItem className="p-0.5"><button className="cursor-pointer border w-full rounded-md" onClick={onContactClick}>Contact</button></DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
