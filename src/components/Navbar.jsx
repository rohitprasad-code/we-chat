import React from "react";

function Navbar() {
    return (
        <div className="navbar">
            <span className="logo">WebChat</span>
            <div className="user">
                <img
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                />
                <span>Rohit</span>
                <button className="logout">Logout</button>
            </div>
        </div>
    );
}

export default Navbar;
