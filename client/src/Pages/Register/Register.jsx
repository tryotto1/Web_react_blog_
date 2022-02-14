import "./Register.css"

export default function Register(){
    return(
        <div className="Register">
            <span className="RegisterTitle">Register</span>
            <form className="RegisterForm">
                <label>User Name</label>
                <input type="text" placeholder="Enter Your User Name..." />
                <label>Email</label>
                <input type="text" placeholder="Enter Your Email..." />
                <label>Password</label>
                <input type="text" placeholder="Enter Your Password..." />
                <button className="RegisterButton">Register</button>
            </form>
            <button className="RegisterLoginButton">Login</button>
        </div>
    )
}