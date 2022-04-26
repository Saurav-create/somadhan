import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import Body from "./body";




class MainComponent extends Component {

    render() {
        return (
            <div>
                <Header />
                <Body />
                <Footer />
            </div>
        );
    }
}

export default MainComponent;
