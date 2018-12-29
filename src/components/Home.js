import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'antd';

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 style={{ textAlign: 'center', fontSize: 40, marginTop: 150 }}>Welcome to the Quiz</h1>
                <Link to="/q1"><Button size={'large'} style={{ margin: '0 auto', display: 'block'}} type="primary">Get Started</Button></Link>
            </React.Fragment>
        );
    }
}
export default Home;