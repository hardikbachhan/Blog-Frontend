import "./login.css"

function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Login</span>
        <form className="loginForm">
            <label>Email</label>
            <input type="email" className="loginInput" placeholder="Enter your email..." required />
            <label>Password</label>
            <input type="password" className="loginInput" placeholder="Enter your password..." required />
            <button className="loginButton">Login</button>
        </form>
            <button className="loginRegisterButton">Register</button>
    </div>
  )
}

export default Login