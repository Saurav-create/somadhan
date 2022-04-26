import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from "axios";
import { Card, CardBody, CardSubtitle, CardTitle, CardText, Button, Modal } from "reactstrap";


class Pushdata extends Component {


    render() {
        return (
            <div className="container">

                <div className="container" style={{ marginTop: "2em" }}>
                    <Card style={{ backgroundColor: "#A3E4D7" }}>
                        <CardTitle>
                            <h2>Publish your problem</h2>
                        </CardTitle>
                        <CardBody>
                            <CardText>
                                <Formik
                                    initialValues={{ id: '', details: '', solve: '' }}

                                    onSubmit={(values) => {
                                        console.log(values);
                                        const data = values;
                                        axios.post('https://somadhan-c41e4-default-rtdb.firebaseio.com/data.json', data)
                                            .then((res) => res)
                                            .then((res) => {
                                                console.log(res);
                                            })


                                    }}
                                >
                                    {() => (
                                        <Form>
                                            <div style={{
                                                margin: "1em",
                                                border: "1em"
                                            }}>
                                                <label htmlFor="id" style={{ margin: "1em" }} >ID</label>
                                                <Field type="text" name="id" /><br />
                                                <ErrorMessage name="id" component="div" />
                                            </div>

                                            <div style={{
                                                margin: "1em",
                                                border: "1em"
                                            }}>
                                                <label htmlFor="details" style={{ margin: "1em" }} >Describe your problem</label>
                                                <Field type="text" name="details" /><br />
                                                <ErrorMessage name="text" component="div" />
                                            </div>

                                            <div style={{
                                                margin: "1em",
                                                border: "1em"
                                            }}>
                                                <button type="submit"  >
                                                    Submit
                                                </button>
                                            </div>


                                        </Form>
                                    )}
                                </Formik>
                            </CardText>
                        </CardBody>
                    </Card>

                </div>



                <div className="container" style={{ marginTop: "2em" }}>
                    <Card style={{ backgroundColor: "#A3EDFA" }}>
                        <CardTitle>
                            <h2>Publish your Solution</h2>
                        </CardTitle>
                        <CardBody>
                            <CardText>
                                <Formik
                                    initialValues={{ id: '', details: '', solve: '' }}

                                    onSubmit={(values) => {
                                        console.log(values);
                                        let soldata = values;
                                        axios.post('https://somadhan-c41e4-default-rtdb.firebaseio.com/sol.json', soldata)
                                            .then((res) => res)
                                            .then((res) => {
                                                console.log(res);
                                            })


                                    }}
                                >
                                    {() => (
                                        <Form>
                                            <div style={{
                                                margin: "1em",
                                                border: "1em"
                                            }}>
                                                <label htmlFor="id" style={{ margin: "1em" }} >Solution ID</label>
                                                <Field type="text" name="id" /><br />
                                                <ErrorMessage name="id" component="div" />
                                            </div>

                                            <div style={{
                                                margin: "1em",
                                                border: "1em"
                                            }}>
                                                <label htmlFor="details" style={{ margin: "1em" }} >Describe your Solution</label>
                                                <Field type="text" name="details" /><br />
                                                <ErrorMessage name="text" component="div" />
                                            </div>

                                            <div style={{
                                                margin: "1em",
                                                border: "1em"
                                            }}>
                                                <button type="submit"  >
                                                    Submit
                                                </button>
                                            </div>


                                        </Form>
                                    )}
                                </Formik>
                            </CardText>
                        </CardBody>
                    </Card>

                </div>







            </div>
        );
    }
}

export default Pushdata;