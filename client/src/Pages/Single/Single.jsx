import "./Single.css"
import SideBar from "../../Components/SideBar/SideBar"
import SinglePost from "../../Components/SinglePost/SinglePost"

export default function Single(){
    return (
        <div className="Single">            
            {/* post */}
            <SinglePost />
            <SideBar />

        </div>
    )
}