import "./SideBar.css"

export default function SideBar(){
    return(
        <div className="SideBar">
            <div className="SideBarItem">
                <span className="SideBarTitle">About Me</span>
                <img 
                    src="https://ww.namu.la/s/c76d184f9514b642b065bdb4b85c1caed6ef1b196a816cf5371f24a5c2500c6260b3959789a4a7aed14ab316112428f5252e07400610b7664e75dc2dc96efe47a3de4704d4171a62dffe2ec7d9d377f5" 
                    alt="" 
                />
                <p>
                    My Name Is Kang, Hyung-ook
                    asdde as sfqwsa aw wsacxq 
                    asdde as sfqwsa aw wsacxq 
                    asdde as sfqwsa aw wsacxq 
                    asdde as sfqwsa aw wsacxq 
                    asdde as sfqwsa aw wsacxq 
                </p>
            </div>
            <div className="SideBarItem">
                <span className="SideBarTitle">Categories</span>
                <ul className="SideBarList">
                    <li className="SideBarListItem">Life</li>
                    <li className="SideBarListItem">Music</li>
                    <li className="SideBarListItem">Style</li>
                    <li className="SideBarListItem">Sport</li>
                    <li className="SideBarListItem">Tech</li>
                    <li className="SideBarListItem">Cinema</li>
                </ul>
            </div>
            <div className="SideBarItem">
                <span className="SideBarTitle">Follow Us</span>
                <div className="SideBarSocial">
                    <i className="SideBarIcon fab fa-instagram"></i>
                    <i className="SideBarIcon fab fa-facebook-square"></i>
                    <i className="SideBarIcon fab fa-github-square"></i>
                </div>
            </div>
        </div>
    )
}