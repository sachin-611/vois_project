import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <>
            <header>
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

            <div class="about">
                <h1>ABOUT</h1>
                <hr />
                <div id="start-video"
                    >

                    {/* <iframe
                        width="1520"
                        height="585"
                        src="https://www.youtube.com/embed/HI6QEVUCt2g"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe> */}
                </div>

                <p>
                    For more details visit
                    <a href="https://github.com/sachin-611/ms-team-clone.git">here</a>
                </p>
            </div>
        </>
    );
}

export default About;