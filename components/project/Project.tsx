import Link from "next/link"
import { Button } from "../ui/button"

const Project = () => {
    return(
        <div className=" flex flex-col justify-center gap-y-10 w-full py-20 bg-emerald-500">
            <div>
                <h1 className="text-2xl text-center">My Work</h1>
            </div>
            <div className="mx-30 rounded-md bg-white text-emerald-950 shadow hover:shadow-md shadow-emerald-950">
                <img className="rounded-t-md w-full" src="/menuitems.png" alt="" />
                <h1 className="m-5 text-2xl">Menu Management System</h1>
                <h1 className="m-5">A full-stack menu system with role-based access</h1>
                <div className="m-5 mt-10 hover:shadow rounded-md shadow-black">
                    <Link href={"/"}>
                        <Button className="w-full bg-emerald-900 hover:bg-emerald-800 text-white cursor-pointer">
                            Veiw Project
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Project