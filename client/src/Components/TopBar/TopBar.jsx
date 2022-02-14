import { Link } from "react-router-dom"
import Login from "../../Pages/Login/Login"
import "./TopBar.css"

export default function TopBar(){
    const user = false;
    return (
        <div className="Top">
            <div className="TopLeft">
                <i className="TopLeftIcon fab fa-instagram"></i>
                <i className="TopLeftIcon fab fa-facebook-square"></i>
                <i className="TopLeftIcon fab fa-github-square"></i>
            </div>

            <div className="TopCenter">
                <ul className="TopList">
                    <li className="TopListItem">
                        <Link to="/" className="link">HOME</Link>                        
                    </li>

                    <li className="TopListItem">
                        <Link to="/" className="link">ABOUT</Link>                        
                    </li>

                    <li className="TopListItem">
                        <Link to="/" className="link">CONTACT</Link>
                    </li>

                    <li className="TopListItem">
                        <Link to="/write" className="link">WRITE</Link>
                    </li>
                    
                    <li className="TopListItem">
                        <Link to="/" className="link">LOGOUT</Link>
                    </li>                    
                </ul>
            </div>

            <div className="TopRight">
                {
                    user ? (
                        <img 
                            className="TopImg"
                            src="data:image/jpeg;base64,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" 
                            alt="" 
                        />
                    ):(
                        <ul className="TopListItem">
                            <Link classname="link" to="/login">LOGIN</Link>
                            <Link classname="link" to="/register">REGISTER</Link>
                        </ul>
                        
                    )
                }
                <i class="TopSearchIcon fas fa-search"></i>
            </div>            
        </div>
    )
}