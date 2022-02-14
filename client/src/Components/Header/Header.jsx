import "./Header.css"

export default function Header(){
    return (
        <div className="Header">
            <div className="headerTitles">
                <span className="headerTitleSmall">React&Node</span>
                <span className="headerTitleLarge">Blog</span>
            </div>
            <img
                className="headerImg" 
                src="https://images.mypetlife.co.kr/content/uploads/2019/07/09153632/christin-hume-UhofgcwgQn8-unsplash.jpg" 
                alt="" 
            />
        </div>
    )
}