import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import styles  from './main.scss';
import NewPost from './NewPosts/NewPost';
import PostInCategory from './PostInCategory/PostInCategory';
import SideBar from '../SideBar/SideBar';
import NewPostContainer from '../../containers/NewPostContainer';
const style = { padding: '0 15px 0 15px' };
import {connect} from 'react-redux';
import axios from 'axios';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts : []
        }
    }
    async componentDidMount(){
        var res = await axios.get("https://protected-beyond-88939.herokuapp.com/post/all");
        if(res){
            this.setState({
                posts : res.data.data
            })
        }
    }
    showPostInCategory =  (cats,posts)=>{
        if(posts){
            return posts.map((ele,index)=>{
                let cat = cats.find(e=>e._id === ele._id);
                return <PostInCategory 
                            title= {cat.title}
                            key={index}
                            items = {ele.items}
                />
            })
        }
    }
    render() {
        var {cats} = this.props;
        var {posts} = this.state;

        return (
           <Layout className={styles.main}>
               <Row>
                   <Col xs={24} sm={24} md={17} lg={16} xl={16} style={style}>
                       <NewPostContainer></NewPostContainer>
                       {this.showPostInCategory(cats,posts)}
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
const mapStateToProps = state =>{
    return {
        cats : state.category
    }
}
export default connect(mapStateToProps,null) (Main);