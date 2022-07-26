import './login.css'

export default function Login() {
    return (
        <div className="loginContainer">
            <div className="main">
                <input type="checkbox" id="chk" aria-hidden="true" />
                <div class="signup">
                    <form>
                        <label className='loginLabel' for="chk" aria-hidden="true">Sign up</label>
                        <input className='loginInput' type="text" name="txt" placeholder="Username" required="" />
                        <input className='loginInput' type="email" name="email" placeholder="Email" required="" />
                        <input className='loginInput' type="password" name="pswd" placeholder="Password" required="" />
                        <input className='loginInput' type="password" name="pswd" placeholder="Repeat Password" required="" />
                        <button className='loginButton button'>Sign up</button>
                    </form>
                </div>
                <div class="login">
                    <form>
                        <label className='loginLabel' for="chk" aria-hidden="true">Login</label>
                        <input className='loginInput' type="email" name="email" placeholder="Email" required="" />
                        <input className='loginInput' type="password" name="pswd" placeholder="Password" required="" />
                        <button className='loginButton button'>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
