import Link from "next/link"
import { FiLinkedin } from "react-icons/fi"
import { LuGithub } from "react-icons/lu"

interface IProps {

}

const Footer = ({}: IProps) => {
    return(
        <div className="sm:flex justify-center sm:justify-between bg-black text-white m-8 mx-10 sm:mx-20">
            <h1 className="text-center mb-4 sm:mb-0">© ezzladeen. All rights reserved.</h1>
            <div className="flex justify-center gap-2">
                <Link href={"https://github.com/Splendor-3zz"}>
                    <LuGithub  className="text-2xl cursor-pointer"/>
                </Link>
                <Link href={"https://www.linkedin.com/in/ezzaldeen-al-shaibani-560640372/"}>
                    <FiLinkedin  className="text-2xl cursor-pointer"/>
                </Link>
            </div>
        </div>
    )
}

export default Footer