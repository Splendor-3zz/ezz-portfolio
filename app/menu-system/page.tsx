import Footer from "@/components/footer/Footer"
import HeaderTwo from "@/components/header/HeaderTwo"
import MenuSystem from "@/components/project/MenuSystem"

interface IProps {

}

const page = ({}: IProps) => {
    return(
        <div>
            <HeaderTwo/>
            <MenuSystem/>
            <Footer/>
        </div>
    )
}

export default page