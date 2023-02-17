import React from "react";
import  ReactDOM  from "react-dom";
import Photo from "./components/photo";
import Name from "./components/name";
import Buttons from "./components/button";
import Content from "./components/content";
import Footer from "./components/footer";

function One () {
    return(
        <div className="container">
        <Photo />
        <Name />
        <Buttons />
        <Content/>
        <Footer />
        </div>
    )


}

ReactDOM.render(<One />,document.getElementById("root"))
