import React from "react";
import { Link } from "react-router-dom";

const Chat = () => {
    return (
        <>
            <div class="navbar">
                <nav>
                    <ul class="navigation">
                        <Link to="/">Home</Link>
                        <Link to="/meet">Meet</Link>
                        <Link to="/chat">Chat</Link>
                        <Link to="/feedback">Feedback</Link>
                        <Link to="/about">About</Link>
                    </ul>
                </nav>
            </div>
            <div class="clearfix"></div>


            <div class="join-container">
                <header class="join-header">
                    <h1><i class="far fa-comment"></i> Chat</h1>
                </header>
                <main class="join-main">
                    <form action="/chat" method="POST" id="chat-login">
                        <div class="form-control">
                            <label for="meet">Meet link</label>
                            <input name="meet" type="text" id="meet" placeholder="02a9-9naok-472hn-nsc3" required />
                        </div>
                        <button type="submit" class="btn">Join Chat</button>
                    </form>
                </main>
            </div>
        </>
    );
}

export default Chat;