import React, { useState,useEffect } from 'react';
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import {
    Link
  } from "react-router-dom";

import { Layout, Row, Col , Breadcrumb} from "antd";
const breadcrumbNameMap = {
    '/': 'Trang chủ',
    '/post': 'Bài viết',
};

function BreadcrumbHeader(props) {
    const location = useLocation();
    console.log(props.name);
    return (
        <Layout>
            <Row>
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <h1>Breadcrumb</h1>
                </Col>
            </Row>
        </Layout>
    );
}

export default BreadcrumbHeader;
