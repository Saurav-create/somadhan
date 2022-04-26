import React, { Component } from "react";
import { Card, CardBody, CardSubtitle, CardTitle, CardText, Button, Modal } from "reactstrap";
import { connect } from "react-redux";
import { fetchSol } from "./redux/actionCreators.js";



const mapDispatchToProps = dispatch => {
    return {
        fetchSol: () => dispatch(fetchSol()),
    }
}

const mapStateToProps = state => {
    return {
        sol: state.sol,

    }
}



class Solutions extends Component {
    componentDidMount() {
        this.props.fetchSol();

    }

    render() {
        console.log(this.props);

        let arr = this.props.sol;
        let solComponent = arr.map(com => {
            return (
                <div className="container"
                    style={{ marginTop: "2em" }}
                >

                    <Card
                        style={{ backgroundColor: "#A3E4D7" }}
                    >
                        <CardBody>
                            <CardTitle tag="h5">
                                Student ID : {com.id}
                            </CardTitle>
                            <CardSubtitle
                                className="mb-2 text-muted"
                                tag="h6"
                            >
                                Details of the problem:
                            </CardSubtitle>
                            <CardText>
                                {com.details}
                            </CardText>
                        </CardBody>
                    </Card>
                </div >



            );
        })

        return (
            <div>
                {solComponent}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Solutions);