import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, Collapse, NavbarText } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';



const mapStateToProps = state => {
    // console.log("from mapstateto props");
    return {
        // name: state.name,
    }
}



class Header extends Component {

    state = {
        isNavOpen: false,
    }

    navToggle = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen,
        })
    }

    componentDidMount() {
        // console.log(this.props.name);
    }

    render() {
        return (
            <div>
                <Navbar
                    style={{ backgroundColor: "#C8A9D4" }}
                    expand="md"

                >
                    <NavbarBrand href="/">
                        <h2 style={{ color: "white" }}> Somadhan</h2>
                    </NavbarBrand>
                    <NavbarToggler onClick={this.navToggle} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav
                            className="me-auto"
                            navbar
                        >
                            <NavItem>
                                <NavLink exact to="/home"
                                    className="Navlink"
                                    style={({ isActive }) => {
                                        return {
                                            display: "block",
                                            margin: "1rem",
                                            color: isActive ? "red" : "white",
                                            textDecoration: "none",

                                        };
                                    }}>
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink exact to="/solutions"
                                    className="Navlink"
                                    style={({ isActive }) => {
                                        return {
                                            display: "block",
                                            margin: "1rem ",
                                            color: isActive ? "red" : "white",
                                            textDecoration: "none",
                                        };
                                    }}>
                                    Solutions
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink exact to="/form"
                                    className="Navlink"
                                    style={({ isActive }) => {
                                        return {
                                            display: "block",
                                            margin: "1rem ",
                                            color: isActive ? "red" : "White",
                                            textDecoration: "none",
                                        };
                                    }}>
                                    Publish problem/ Solution
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <NavbarText >
                            <h5 style={{ textColor: "white" }}>East Delta University</h5>
                        </NavbarText>
                    </Collapse>
                </Navbar>
            </div >
        );
    }


}

export default connect(mapStateToProps)(Header);