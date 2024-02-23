import React from "react";

function Login() {
    return (
        <div className="form-container">
            <div className="form-wrap">
                <span className="title">Login</span>
                <form action="" className="form">
                    <input required type="email" placeholder="Email" />
                    <input required type="password" placeholder="Password" />
                    <button>Login</button>
                </form>
                <span className="login-link">
                    You don't have an account? Login
                </span>
            </div>
        </div>
    );
}

export default Login;
