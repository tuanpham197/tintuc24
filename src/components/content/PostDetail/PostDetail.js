import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux'

import {
    useParams,
    Link
  } from "react-router-dom";

import { Layout, Row, Col , Breadcrumb} from "antd";
import SideBar from "../../SideBar/SideBar";
import BreadcrumbHeader from '../Breadcrumb/index'
const style = { padding: "0 15px 0 15px" };
const breadcrumbNameMap = {
    '/': 'Trang chủ',
    '/post': 'Bài viết',
  };

const getDetail = async (posts,id)=>{
    return posts.find(element=>element._id === id);
}

function PostDetail(props) {
    const [post, setPost] = useState({});
    const posts = useSelector((state) => state.posts)
    let { id } = useParams();
    useEffect(()=>{
        getDetail(posts,id).then(res=>{
            console.log(res);
            //res.createdAt = new Date(res.createdAt);
            setPost(res);
        })
    },[props.post])

    return (
        <Layout>
            <Row>
                <Col xs={24} sm={24} md={17} lg={16} xl={16} style={style}>
                    <BreadcrumbHeader name="brare"/>

                    <div>
                        <h2>{post.title}</h2>
                        <p>{post.createdAt}</p>
                        <p>{post.content}</p>
                    </div>
                </Col>
                <Col xs={0} sm={0} md={0} lg={2} xl={2}></Col>
                <Col xs={24} sm={24} md={7} lg={6} xl={6} style={style}>
                    <SideBar />
                </Col>
            </Row>
        </Layout>
    );
}

export default PostDetail;
