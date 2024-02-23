import React from "react";

function Chats() {
    return (
        <div className="chats">
            <div className="user-chat">
                <img
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                />
                <div className="user-chat-info">
                    <span>Person 4</span>
                    <p className="msg">hello</p>
                </div>
            </div>
            <div className="user-chat">
                <img
                    src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                />
                <div className="user-chat-info">
                    <span>Person 4</span>
                    <p className="msg">hello</p>
                </div>
            </div>
        </div>
    );
}

export default Chats;
