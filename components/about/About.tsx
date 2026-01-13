import { forwardRef } from "react";
import CircularText from "../CircularText";
import { Button } from "../ui/button";

type IProps = {
  onWorkClick: () => void
  onContactClick: () => void
}

const About = forwardRef<HTMLDivElement,IProps>(({onWorkClick,onContactClick}, ref) => {
    const about = `Full-Stack Developer with an academic background in Software Engineering, focused on building scalable, maintainable, and performance-driven web interfaces.

I primarily work with JavaScript and TypeScript, using React and Next.js to develop modern web applications, with practical experience integrating frontend systems with MongoDB and Prisma.

I have a solid foundation in software engineering principles and place strong emphasis on clean code, usability, and long-term project structure.

I hold a Bachelor’s degree in Software Engineering and have completed a Frontend Engineer course on Udemy. I am seeking opportunities in teams that value practical problem-solving, code quality, and continuous improvement.`
  return (
    <div className="flex flex-col justify-center items-center bg-emerald-600 pt-25 sm:pt-22" ref={ref}>
        <div className="relative w-64 h-64 flex items-center justify-center">
            <CircularText
              text="FULL*STACK*DEVELOPER*"
              onHover="speedUp"
              spinDuration={20}
              className="custom-class bg-black"
            />
            <img
                src="/ezzphoto.jpeg"
                alt="Ezzaldeen"
                className=" absolute w-40 h-40 rounded-full object-cover z-10"
            />
        </div>
        <div className="text-start w-full space-y-6 px-10 pb-20">
            <div className="text-center space-y-3">
                <h1 className="text-2xl sm:text-4xl">Ezzaldeen Al-shaibani</h1>
                <h2 className="text-xl sm:text-2xl">Full-Stack Developer</h2>
            </div>
            <p className="text-sm sm:text-l sm:px-10 md:px-30">{about}</p>
            <div className="flex justify-center gap-x-2">
                <Button onClick={onWorkClick} className="bg-emerald-950 hover:bg-emerald-900 cursor-pointer">
                    View My work
                </Button>
                <Button onClick={onContactClick} className="bg-white hover:bg-emerald-200 text-emerald-950 cursor-pointer">
                    Get in Touch
                </Button>
            </div>
        </div>
    </div>
  );
});

About.displayName = "About"
export default About;
