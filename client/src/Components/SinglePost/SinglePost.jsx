import "./SinglePost.css"

export default function SinglePost(){
    return (
        <div className="SinglePost">
            <div className="SinglePostWrapper">
                <img 
                    src="https://blog.kakaocdn.net/dn/O7e6e/btqE7nWzGpm/T39leVymKKAVY3TM5kkkhK/img.jpg" 
                    alt="" 
                    className="SinglePostImg"
                />
                <h1 className="SinglePostTitle">
                    Lorem ipsum dolor sit amet consectetur                     
                    <div className="SinglePostEdit">
                        <i className="SinglePostIcon far fa-edit"></i>
                        <i className="SinglePostIcon far fa-trash-alt"></i>
                    </div>                    
                </h1>
                <div className="SinglePostInfo">
                    <span className="singlePostAuthor">Author : KSY</span>
                    <span className="singlePostDate">Date : Feb.8th</span>
                </div>
                <p className="SinglePostDescription">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Soluta sint asperiores quos saepe ad tenetur excepturi dolores iusto. 
                    Nobis at ratione doloribus sint nihil reiciendis officia repellendus 
                    quo consequatur pariatur?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Soluta sint asperiores quos saepe ad tenetur excepturi dolores iusto. 
                    Nobis at ratione doloribus sint nihil reiciendis officia repellendus 
                    quo consequatur pariatur?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Soluta sint asperiores quos saepe ad tenetur excepturi dolores iusto. 
                    Nobis at ratione doloribus sint nihil reiciendis officia repellendus 
                    quo consequatur pariatur?
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Soluta sint asperiores quos saepe ad tenetur excepturi dolores iusto. 
                    Nobis at ratione doloribus sint nihil reiciendis officia repellendus 
                    quo consequatur pariatur?
                </p>
            </div>        
        </div>
    )
}