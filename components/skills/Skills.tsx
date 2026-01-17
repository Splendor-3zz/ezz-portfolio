import { forwardRef } from "react";
import { FaCode, FaDatabase } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { IoLanguage } from "react-icons/io5";
import { SiFramework } from "react-icons/si";

const Skills = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div className="text-white flex flex-col justify-center items-center bg-black space-y-3 py-20" ref={ref}>
      <h1 className="text-2xl">My Expertise</h1>
      <p className="text-xl text-center px-10 sm:px-20 ">
        A summary of my technical skills and language proficiencies.
      </p>

      <div className="w-full mt-10 px-5 sm:px-25">
        <div className="space-y-10">

          <div className="sm:flex w-full space-x-10 space-y-10 sm:space-y-0">
            
            <div className="flex flex-col gap-2 pl-5 py-5 shadow-sm border-2 w-full rounded bg-white text-emerald-800">
              <div className="flex items-center gap-3">
                <FaCode className="text-xl" />
                <h1 className="text-xl">Languages</h1>
              </div>
              <div className="flex items-center gap-3">
                <GoDotFill className="text-l" />
                <h1 className="text-sm">JavaScript</h1>
              </div>
              <div className="flex items-center gap-3">
                <GoDotFill className="text-l" />
                <h1 className="text-sm">TypeScript</h1>
              </div>
              <div className="flex items-center gap-3">
                <GoDotFill className="text-l" />
                <h1 className="text-sm">HTML5</h1>
              </div>
              <div className="flex items-center gap-3">
                <GoDotFill className="text-l" />
                <h1 className="text-sm">CSS3</h1>
              </div>
            </div>

            <div className="flex flex-col gap-2 pl-5 py-5 shadow-sm border-2 w-full rounded bg-white text-emerald-800">
              <div className="flex items-center gap-3">
                <SiFramework className="text-xl" />
                <h1 className="text-xl">Frameworks & Libraries</h1>
              </div>
              <div className="flex items-center gap-3">
                <GoDotFill className="text-l" />
                <h1 className="text-sm">React</h1>
              </div>
              <div className="flex items-center gap-3">
                <GoDotFill className="text-l" />
                <h1 className="text-sm">Next.js</h1>
              </div>
              <div className="flex items-center gap-3">
                <GoDotFill className="text-l" />
                <h1 className="text-sm">Tailwind CSS</h1>
              </div>
            </div>
          </div>

          <div className="sm:flex w-full space-x-10 space-y-10 sm:space-y-0">
            <div className="flex flex-col gap-2 pl-5 py-5 shadow-sm border-2 w-full rounded bg-white text-emerald-800">
              <div className="flex items-center gap-3">
                <FaDatabase  className="text-l"/>
                <h1 className="text-xl">Databases & Tools</h1>
              </div>
              <div className="flex items-center gap-3">
                <GoDotFill className="text-l" />
                <h1 className="text-sm">MongoDB</h1>
              </div>
              <div className="flex items-center gap-3">
                <GoDotFill className="text-l" />
                <h1 className="text-sm">Git</h1>
              </div>
            </div>

            <div className="flex flex-col gap-2 pl-5 py-5 shadow-sm border-2  w-full rounded bg-white text-emerald-800">
              <div className="flex items-center gap-3">
                <IoLanguage className="text-xl" />
                <h1 className="text-xl">Languages</h1>
              </div>
              <div className="flex items-center gap-3">
                <GoDotFill className="text-l" />
                <h1 className="text-sm">Arabic</h1>
              </div>
              <div className="flex items-center gap-3">
                <GoDotFill className="text-l" />
                <h1 className="text-sm">Turkish</h1>
              </div>
              <div className="flex items-center gap-3">
                <GoDotFill className="text-l" />
                <h1 className="text-sm">English</h1>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
});

Skills.displayName = "Skills"

export default Skills;
