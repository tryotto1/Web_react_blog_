import "./Settings.css"
import SideBar from "../../Components/SideBar/SideBar"

export default function Settings(){
    return (
        <div className="Settings">
            <div className="SettingsWrapper">                
                <div className="SettingsTitle">
                    <span className="SettingsUpdateTitle">Update Your Profile</span>
                    <span className="SettingsDeleteTitle">Delete Your Profile</span>
                </div>
                <form className="SettingsForm">
                    <label>Profile Picture</label>
                    <div className="SettingsProfilePicture">
                        <img 
                            src="https://t1.daumcdn.net/cfile/tistory/2505944658A41BE72E" 
                            alt="" 
                        />
                    </div>                        
                    
                    <label htmlFor="FileInput">
                        <i className="SettingsProfilePictureIcon fas fa-user"></i>                            
                    </label>
                    <input type="file" id="FileInput" style={{display:"none"}}/>
                    <label>User Name</label>
                    <input type="text" placeholder="tryotto" />
                    <label>Email</label>
                    <input type="email" placeholder="tryotto@naver.com" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="SettingsSubmit">Update</button>
                </form>
            </div>
            <SideBar/>
        </div>
    )
}
