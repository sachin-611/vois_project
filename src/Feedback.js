import React from "react";
import { Link } from "react-router-dom";

const Feedback = () => {
    return (
        <>
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

            <div class="content">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-10">
                            <div class="row justify-content-center">
                                <div class="col-md-6">
                                    <h3 class="heading mb-4">Let's talk about everything!</h3>
                                    <p>Every voice matter. We love to hear form you!</p>
                                    <p>
                                        <img
                                            src="img/undraw-contact.svg"
                                            alt="Image"
                                            class="img-fluid"
                                        />
                                    </p>
                                </div>
                                <div class="col-md-6">
                                    <form
                                        class="mb-5"
                                        method="post"
                                        id="contactForm"
                                        name="contactForm"
                                    >
                                        <div class="row">
                                            <div class="col-md-12 form-group">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    name="name"
                                                    id="name"
                                                    placeholder="Your name"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 form-group">
                                                <input
                                                    type="email"
                                                    class="form-control"
                                                    name="email"
                                                    id="email"
                                                    placeholder="Email"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 form-group">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    name="subject"
                                                    id="subject"
                                                    placeholder="Feedback/Suggestion"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-12 form-group">
                                                <textarea
                                                    class="form-control"
                                                    name="message"
                                                    id="message"
                                                    cols="30"
                                                    rows="7"
                                                    placeholder="Write your message"
                                                    required
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-12">
                                                <input
                                                    type="submit"
                                                    value="Send Message"
                                                    class="btn btn-primary rounded-0 py-2 px-4"
                                                />
                                                <span class="submitting"></span>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Feedback;