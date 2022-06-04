function Login() {
    return (
        <div className="content">
            <form className="FriendPost-form" action="/login" method="GET">

                <div className="flex-items">
                    <div className="error errorLogin"></div>
                    <div className="form-InputsDiv">
                        <label htmlfor="Email">Email</label>
                        <input type="text" name="Email" required />
                    </div>
                </div>

                <div className="flex-items">
                    <div className="form-InputsDiv">
                        <label htmlfor="Password">Password</label>
                        <input type="password" name="Password" required />
                    </div>
                </div>

                <div className="flex-items">
                    <div className="form-InputsDiv">
                        <button className="form-InputsDiv-submitButton">Login</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;