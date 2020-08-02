import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import SideBar from '../../SideBar/SideBar';
const style = { padding: '0 15px 0 15px' };

class PostDetail extends Component {
    render() {
        return (
            <Layout>
            <Row>
                <Col xs={24} sm={24} md={17} lg={16} xl={16} style={style}>
                   
                </Col>
                <Col xs={0} sm={0} md={0} lg={2} xl={2}></Col>
                <Col xs={24} sm={24} md={7} lg={6} xl={6} style={style}>
                    <SideBar/>
                </Col>
            </Row>
        </Layout>
            
        );
    }
}

export default PostDetail;