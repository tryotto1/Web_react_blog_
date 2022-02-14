import "./Write.css"

export default function Write(){
    return(
        <div className="Write">
            <img
                className="WriteImg" 
                src="https://s3.ap-northeast-2.amazonaws.com/elasticbeanstalk-ap-northeast-2-176213403491/media/magazine_img/magazine_280/5-3-%EC%8D%B8%EB%84%A4%EC%9D%BC.jpg" 
                alt="" 
            />

            <div className="WriteForm">
                <div className="WriteFormGroup">
                    <label htmlFor="FileInput">
                        <i className="WriteFileIcon fas fa-file-upload"></i>
                    </label>
                    <input type="file" id="FileInput" style={{display:"none"}}/>
                    <input type="text" placeholder="Title" className="WriteInput" autoFocus={true}/> 
                </div>

            </div>
            <div className="WriteFormGroup">
                <textarea
                    placeholder="Tell your story..."
                    type="text"
                    className="WriteInput WriteText"
                ></textarea>
                <button className="WriteSubmit"> Publish </button>
            </div>
        </div>
    )
}