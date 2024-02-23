import React from "react";

function Search() {
    return (
        <div className="search">
            <div className="search-form">
                <input type="text" className="text" placeholder="Find a user" />
            </div>
            <div className="user-chat">
                <img
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                />
                <div className="user-person">
                    <span>Person 1</span>
                </div>
            </div>
            <div className="user-chat">
                <img
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                />
                <div className="user-person">
                    <span>Person 2</span>
                </div>
            </div>
            <div className="user-chat">
                <img
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                />
                <div className="user-person">
                    <span>Person 3</span>
                </div>
            </div>
        </div>
    );
}

export default Search;
