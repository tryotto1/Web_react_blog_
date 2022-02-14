import "./Home.css"
import Header from "../../Components/Header/Header"
import SideBar from "../../Components/SideBar/SideBar"
import Posts from "../../Components/Posts/Posts"

export default function Home(){
    return (
        <>
            <Header/>
            <div Header className="Home">
                <Posts/>
                <SideBar/>                
            </div>    

        </>           
    )
}