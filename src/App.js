import React from "react";
import Home from "./Home";
import Meet from "./Meet";
import Chat from "./Chat";
import Feedback from "./Feedback";
import About from "./About";
import { Routes, Route } from "react-router-dom";




const App = () => {                     
    return (
        <>
           
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/meet" element={<Meet />} />
                    <Route exact path="/chat" element={<Chat />} />
                    <Route exact path="/feedback" element={<Feedback />} />
                    <Route exact path="/about" element={<About />} />
                </Routes>
      
        </>
    );
}

export default App;
