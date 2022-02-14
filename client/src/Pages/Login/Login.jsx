import "./Login.css"

export default function Login(){
    return(
        <div className="Login">
            <span className="LoginTitle">Login</span>
            <form className="LoginForm">
                <label>Email</label>
                <input type="text" placeholder="Enter Your Email..." />
                <label>Password</label>
                <input type="text" placeholder="Enter Your Password..." />
                <button className="LoginButton">Login</button>
            </form>
            <button className="LoginRegisterButton">Register</button>
        </div>
    )
}