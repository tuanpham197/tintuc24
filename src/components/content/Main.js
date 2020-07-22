import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import styles  from './main.scss';
import NewPost from './NewPosts/NewPost';
import PostInCategory from './PostInCategory/PostInCategory';
import SideBar from '../SideBar/SideBar';
const style = { padding: '0 15px 0 15px' };

class Main extends Component {
    render() {
        return (
           <Layout className={styles.main}>
               <Row>
                   <Col xs={24} sm={24} md={17} lg={16} xl={16} style={style}>
                       <NewPost></NewPost>
                       <PostInCategory></PostInCategory>
                       <PostInCategory></PostInCategory>
                       <PostInCategory></PostInCategory>
                       <PostInCategory></PostInCategory>
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

export default Main;