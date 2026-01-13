import Link from "next/link";
import { GoDotFill, GoStack } from "react-icons/go";
import { LuGithub } from "react-icons/lu";
import { MdOutlineKeyboardCommandKey } from "react-icons/md";
import { RiShareBoxFill } from "react-icons/ri";

const MenuSystem = () => {
  const p = `Developed a full-stack menu system using Next.js and TypeScript, with a component-based, maintainable architecture. Implemented role-based access with two user types (Admin and User); admins can manage menu items and categories, while users view and interact with menus. Built secure CRUD operations using Prisma ORM and MongoDB, ensuring structured data handling and reliable persistence. Applied responsive UI patterns, input validation, and clean code practices suitable for scaling the system.`;
  return (
    <div className="pb-20 pt-30 bg-emerald-600 px-30">
      <h1 className="text-5xl mb-5">Menu Management System</h1>
      <img src="/menuitemss.png" alt="menu" className="rounded-md" />
      <div className="my-10">
        <h1 className="text-3xl mb-5">About the project :</h1>
        <p>{p}</p>
      </div>

      <div className="sm:flex w-full space-x-10 space-y-10 sm:space-y-0">
        <div className="flex flex-col gap-2 pl-5 py-5 shadow-sm border-2 w-full rounded bg-white text-emerald-800">
          <div className="flex items-center gap-3">
            <MdOutlineKeyboardCommandKey className="text-xl" />
            <h1 className="text-xl">Key Features</h1>
          </div>
          <div className="flex items-center gap-3">
            <GoDotFill className="text-l" />
            <h1 className="text-sm">
              CRUD operations for menu items and categories
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <GoDotFill className="text-l" />
            <h1 className="text-sm">
              Dynamic pricing and availability control
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <GoDotFill className="text-l" />
            <h1 className="text-sm">Responsive customer-facing menu</h1>
          </div>
          <div className="flex items-center gap-3">
            <GoDotFill className="text-l" />
            <h1 className="text-sm">
              Admin dashboard with form validation and error handling
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <GoDotFill className="text-l" />
            <h1 className="text-sm">
              Persistent data storage with schema-based modeling
            </h1>
          </div>
        </div>

        <div className="flex flex-col gap-2 pl-5 py-5 shadow-sm border-2 w-full rounded bg-white text-emerald-800">
          <div className="flex items-center gap-3">
            <GoStack className="text-xl" />
            <h1 className="text-xl">Tech Stack</h1>
          </div>
          <div className="flex items-center gap-3">
            <GoDotFill className="text-l" />
            <h1 className="text-sm">Frontend: React, Next.js, TypeScript</h1>
          </div>
          <div className="flex items-center gap-3">
            <GoDotFill className="text-l" />
            <h1 className="text-sm">Backend: Next.js API routes</h1>
          </div>
          <div className="flex items-center gap-3">
            <GoDotFill className="text-l" />
            <h1 className="text-sm">Database: MongoDB</h1>
          </div>
          <div className="flex items-center gap-3">
            <GoDotFill className="text-l" />
            <h1 className="text-sm">ORM: Prisma</h1>
          </div>
          <div className="flex items-center gap-3">
            <GoDotFill className="text-l" />
            <h1 className="text-sm">
              State & Data Handling: Server-side rendering and API-driven
              updates
            </h1>
          </div>
        </div>
      </div>
        <div className="mt-10 space-y-5">
            <h1 className="text-3xl">Links:</h1>
            <Link href={"https://menu-system-git-main-ezzaldeens-projects-50597db9.vercel.app?_vercel_share=q0Hbc7AmWHXR6ifPAVDzk1hqE8TVWUYj"} className="flex justify-center items-center gap-2 rounded-md p-1 bg-white hover:bg-emerald-200 text-emerald-950">
                <RiShareBoxFill />
                <h1>Live App</h1>
            </Link>
            <Link href={"https://github.com/Splendor-3zz/Menu-system"} className="flex justify-center items-center gap-2 rounded-md p-1 bg-emerald-950 hover:bg-emerald-900 ">
                <LuGithub />
                <h1>Source Code</h1>
            </Link>
        </div>
    </div>
  );
};

export default MenuSystem;
