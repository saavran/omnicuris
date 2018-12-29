import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { Row, Col, Radio, Button, Icon } from 'antd';

const RadioGroup = Radio.Group;

class QuestionTwo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            classHide: 'hide',
            answer: 1,
            time: 10,
            value: 'none'
        }
    }
    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    }
    showAnswer = () => {
        if (this.state.value === this.state.answer) {
            this.setState({ classHide: 'rightAnswer' })
        } else {
            this.setState({ classHide: 'wrongAnswer' })
        }
    }
    submitAnswer = () => {
        let result = [this.state.value, this.state.answer];
        localStorage.setItem('questionTwo', JSON.stringify(result))
    }
    showError = () => {
        this.setState({error: "Please Select an Option"})
    }
    countDown = () => {
        let seconds = this.state.time - 1;
        this.setState({time:seconds})
    }
    componentDidMount = () => {
        setInterval(this.countDown, 1000);
        setTimeout(this.submitAnswer, 1000);
    }
    render() {
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        if (this.state.time === 0) {
            return (<Redirect to={'/q3'} />)
        }
        return (
            <div>
                <Row>
                    <Col span={4}></Col>
                    <Col span={16}>
                        {this.props.quiz.slice(1, 2).map(question => {
                            return <h1 style={{ marginTop: 100 }}>{question.question}</h1>
                        })}
                        <RadioGroup onChange={this.onChange} value={this.state.value}>
                            {this.props.quiz.slice(1, 2).map(option => {
                                return <Radio style={radioStyle} value={1}>{option.one}</Radio>
                            })}
                            {this.props.quiz.slice(1, 2).map(option => {
                                return <Radio style={radioStyle} value={2}>{option.two}</Radio>
                            })}
                            {this.props.quiz.slice(1, 2).map(option => {
                                return <Radio style={radioStyle} value={3}>{option.three}</Radio>
                            })}
                            {this.props.quiz.slice(1, 2).map(option => {
                                return <Radio style={radioStyle} value={4}>{option.four}</Radio>
                            })}
                        </RadioGroup>
                        <br></br>
                        <span className="errorMsg">{this.state.error}</span>
                        {this.props.quiz.slice(1, 2).map(option => {
                            return <span className={this.state.classHide} style={radioStyle}>{this.state.answer === this.state.value ? (<Icon type="check" />) : (<Icon type="close" />)}{option.one} is the correct answer</span>
                        })}
                        <br></br>
                        <Button onClick={this.showAnswer}>See Answer</Button>
                        {this.state.value === 'none' ? (<Button onClick={this.showError} type="primary">Next Question</Button>) : (<Link to="/q3"><Button onClick={this.submitAnswer} type="primary">Next Question</Button></Link>)}
                    </Col>
                    <Col span={4}><h1>{this.state.time}</h1></Col>
                </Row>
            </div>
        );
    }
}

export default QuestionTwo;