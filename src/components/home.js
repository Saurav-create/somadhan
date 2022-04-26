import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPrbs } from "./redux/actionCreators.js";
import { Card, CardBody, CardSubtitle, CardTitle, CardText, Button, Modal } from "reactstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import edu from "../image/edu.jpg";
import Image from 'react-bootstrap/Image'


const mapDispatchToProps = dispatch => {
    return {
        fetchPrbs: () => dispatch(fetchPrbs()),
    }
}

const mapStateToProps = state => {
    return {
        prbs: state.prbs,

    }
}


class Home extends Component {
    componentDidMount() {
        this.props.fetchPrbs();

    }

    state = {
        modelOpen: false,
    }

    toggleModal = () => {
        this.setState({
            ...this.state,
            modelOpen: !this.state.modelOpen,
        })
    }

    render() {
        let arr = this.props.prbs;
        let prbComponent = arr.map(com => {
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
                            <Button onClick={this.toggleModal}>
                                Details
                            </Button>
                        </CardBody>
                    </Card>

                    <Modal isOpen={this.state.modelOpen}

                    >
                        <Card>
                            <div style={{
                                backgroundColor: "#F9E79F",
                                fontFamily: "sans-serif"
                            }}>
                                <h3>Details of the problem:</h3>
                                <CardBody>
                                    <CardText>
                                        {com.details}
                                    </CardText>
                                </CardBody>



                            </div>


                            <Button onClick={this.toggleModal} className="container" >
                                Cancel
                            </Button>
                        </Card>

                    </Modal>


                </div >



            );
        })


        return (
            <div>
                <div >
                    {/* <img src={edu}></img> */}
                    <Image src={edu} fluid style={{ width: "80%", height: "30em" }} />
                </div>

                <h3 style={{ margin: "2em", fontFamily: "monospace" }}>List of problems</h3>

                {prbComponent}

            </div >
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);