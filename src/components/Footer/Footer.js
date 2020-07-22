import React, { Component } from 'react';
import styles from './style.scss'
import { Layout, Col, Row } from 'antd';
const style = { padding: '0 15px 0 0' };
import {MailOutlined,PhoneOutlined ,RightOutlined} from '@ant-design/icons';

class Footer extends Component {
    render() {
        return (
            <Layout className={styles.footer}>
                <Row className={styles.footer__align}>
                    <Col md={6} lg={6} xl={6} style={style}>
                        <div>
                            <div className={styles.tile}>
                                <h5>Về chúng tôi</h5>
                            </div>
                            <div className={styles.content}>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                </p>
                                <p><MailOutlined /> vantuankrn197@gmail.com</p>
                                <p><PhoneOutlined /> 012132955131</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={4} lg={4} xl={4} style={style}>
                        <div>
                            <div className={styles.tile}>
                                <h5>Danh mục</h5>
                            </div>
                            <div  className={styles.footer__category}>
                                <ul>
                                    <li>
                                        <a> <RightOutlined style={{marginRight:'10px'}}/>Sự kiện</a>
                                    </li>
                                    <li>
                                        <a><RightOutlined style={{marginRight:'10px'}}/>Xã hội</a>
                                    </li>
                                    <li>
                                        <a><RightOutlined style={{marginRight:'10px'}}/>Thế giới</a>
                                    </li>
                                    <li>
                                        <a><RightOutlined style={{marginRight:'10px'}}/>Giáo dục</a>
                                    </li>
                                    <li>
                                        <a><RightOutlined style={{marginRight:'10px'}}/>vNhịp sống trẻ</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={6} xl={6} style={style}>
                        <div >
                            <div className={styles.tile}>
                                <h5>Tin tức nôỉ bật</h5>
                            </div>
                            <div className={styles.footer__post_popular}>
                                <ul>
                                    <li>
                                        <a><RightOutlined style={{marginRight:'10px'}}/>Ngân hàng có kế hoạch tuyển hàng nghìn nhân sự</a>
                                    </li>
                                    <li>
                                        <a><RightOutlined style={{marginRight:'10px'}}/>Ngân hàng có kế hoạch tuyển hàng nghìn nhân sự</a>
                                    </li>
                                    <li>
                                        <a><RightOutlined style={{marginRight:'10px'}}/>Ngân hàng có kế hoạch tuyển hàng nghìn nhân sự</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col md={2} lg={2} xl={2}style={style}>
                    </Col>
                    <Col md={6} lg={6} xl={6}>
                        fanpage
                    </Col>
                </Row>
            </Layout>
        );
    }
}

export default Footer;