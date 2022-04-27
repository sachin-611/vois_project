import React from "react";
import { Link } from "react-router-dom";
const Meet = () => {
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

            <div>

                <table class="details">
                    <tr>
                        <td>
                            <table cellspacing="70px">
                                <tr>
                                    <td>
                                        <table class="join-details">
                                            <tr>
                                                <td><label for="meet-link">Meet Link:</label></td>
                                                <td><input type="text" id="meet-link" name="link-join" placeholder="02a9-9naok-472hn-nsc3" required /></td>
                                            </tr>
                                        </table>
                                        <br />
                                        <button class="join-button" type="button" name="Join" onclick="joinMeet()">
                                            <a href="#">Join Meet</a>
                                        </button>
                                    </td>
                                    <td><div class="vl"></div></td>
                                    <td>
                                        <div class="create-details">
                                            <button class="create-button" type="button" name="Create" id="create-meet" onclick="generateMeetLink()">
                                                <a href="#">Create Meet</a>
                                            </button>
                                        </div>
                                    </td>

                                    <td>
                                        <img class="image" src="img/circle.png" alt="Image" />
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </div>


        </>
    );
}
export default Meet;