import React, { Component } from 'react';
import { Row, Col, Icon , Button} from 'antd';
import { Link } from "react-router-dom";

class Finish extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }
    componentDidMount = () => {
        var answerOne = JSON.parse(localStorage.getItem("questionOne"))
        var answerTwo = JSON.parse(localStorage.getItem("questionTwo"))
        var answerThree = JSON.parse(localStorage.getItem("questionThree"))
        var answerFour = JSON.parse(localStorage.getItem("questionFour"))
        const correctOne = answerOne[1];
        const correctTwo = answerTwo[1];
        const correctThree = answerThree[1];
        const correctFour = answerFour[1];
        const selectOne = answerOne[0];
        const selectTwo = answerTwo[0];
        const selectThree = answerThree[0];
        const selectFour = answerFour[0];
        this.setState({
            correctOne, correctTwo, correctThree, correctFour, selectOne, selectTwo, selectThree, selectFour
        })
    }
    render() {
        return (
            <React.Fragment>
                <h1 style={{ textAlign: 'center', fontSize: 40, marginTop: 50 }}>Your Result</h1>
                <Row>
                    <Col xs={0} md={4}></Col>
                    <Col xs={24} md={16}>
                        <Row>
                            <Col style={{ textAlign: "center", fontWeight: '700' }} span={6}>Question No. 1</Col>
                            <Col style={{ textAlign: "center" }} span={6}>Your answer: {this.state.selectOne}</Col>
                            <Col style={{ textAlign: "center" }} span={6}>Right answer: {this.state.correctOne}</Col>
                            <Col style={{ textAlign: "center" }} span={6}>{this.state.correctOne === this.state.selectOne ? (<Icon type="check" />) : (<Icon type="close" />)}</Col>
                        </Row>
                        <Row>
                            <Col style={{ textAlign: "center", fontWeight: '700' }} span={6}>Question No. 2</Col>
                            <Col style={{ textAlign: "center" }} span={6}>Your answer: {this.state.selectTwo}</Col>
                            <Col style={{ textAlign: "center" }} span={6}>Right answer: {this.state.correctTwo}</Col>
                            <Col style={{ textAlign: "center" }} span={6}>{this.state.correctTwo === this.state.selectTwo ? (<Icon type="check" />) : (<Icon type="close" />)}</Col>
                        </Row>
                        <Row>
                            <Col style={{ textAlign: "center", fontWeight: '700' }} span={6}>Question No. 3</Col>
                            <Col style={{ textAlign: "center" }} span={6}>Your answer: {this.state.selectThree}</Col>
                            <Col style={{ textAlign: "center" }} span={6}>Right answer: {this.state.correctThree}</Col>
                            <Col style={{ textAlign: "center" }} span={6}>{this.state.correctThree === this.state.selectThree ? (<Icon type="check" />) : (<Icon type="close" />)}</Col>
                        </Row>
                        <Row>
                            <Col style={{ textAlign: "center", fontWeight: '700' }} span={6}>Question No. 4</Col>
                            <Col style={{ textAlign: "center" }} span={6}>Your answer: {this.state.selectFour}</Col>
                            <Col style={{ textAlign: "center" }} span={6}>Right answer: {this.state.correctFour}</Col>
                            <Col style={{ textAlign: "center" }} span={6}>{this.state.correctFour === this.state.selectFour ? (<Icon type="check" />) : (<Icon type="close" />)}</Col>
                        </Row>
                    </Col>
                        <Col xs={0} md={4}></Col>
                </Row>
                <Link to="/"><Button size={'large'} style={{ margin: '0 auto', display: 'block'}} type="primary">Again?</Button></Link>
            </React.Fragment>
                );
            }
        }
export default Finish;