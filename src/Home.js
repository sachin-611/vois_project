import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <div>
               
                <header>
                    <div class="heading">
                        <strong><a href="/">Meeting Platform</a></strong>
                    </div>
                    <div>
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
                </header>
               
                <table cellspacing="50%" align="center">
                    <tr>
                        <td class="content">
                            <h1>Teams Clone</h1>
                            <hr />
                            <p>A VIDEO COMMUNICATION SERVICE</p>
                        </td>
                        <td class="image">
                            <img
                                src="img/front-image.jpg"
                                width="450px"
                                height="300px"
                                alt="Meeting Panel Image"
                            />
                        </td>
                    </tr>
                </table>
            </div>
            {/* <div id="start-video">
               
                <iframe width="1520" height="527" src="https://www.youtube.com/embed/rUftf6sFgJM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div> */}
        </>
    );
}

export default Home;