// import './SignUp.css';

function SignUp() {
    return (
        <div className="content">
            <form className="FriendPost-form">

                <div className="flex-items">
                    <div className="form-InputsDiv">
                        <label htmlfor="Email">Email</label>
                        <div className="error errorEmail"></div>
                        <input type="text" name="Email" required />
                    </div>
                </div>

                <div className="flex-items">
                    <div className="form-InputsDiv">
                        <label htmlfor="Password">Password</label>
                        <div className="error errorPassword"></div>
                        <input type="password" name="Password" required />
                    </div>
                </div>

                <div className="flex-items">
                    <div className="form-InputsDiv">
                        <button className="form-InputsDiv-submitButton">Sign Up</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUp;