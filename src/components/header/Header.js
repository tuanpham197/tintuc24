import React, { Component } from 'react';
import  styles  from './header.scss';
import './header.css'
import { Row, Col ,Input} from 'antd';
const { Search } = Input;
const style = { padding: '0 15px 0 15px' };
import {CloseOutlined,MenuFoldOutlined,MenuOutlined} from '@ant-design/icons';

class Header extends Component {
    render() {
        return (
            <Row className={styles.header} style={style}>
                <Col xs={12} sm={12} md={3} lg={3} xl={4}>
                    <a href="#">
                        <h2 className={styles.logo}>TINTUC24s</h2>
                    </a>
                </Col>
                <Col xs={9} sm={9} md={0} lg={0} xl={0}>
                </Col>
                <Col xs={2} sm={2} md={17} lg={17} xl={16}>
                    <ul className={styles.menu}>
                        <li>
                            <a href="#s">Trang chủ</a>
                        </li>
                        <li>
                            <a href="#s">Sự kiện</a>
                        </li>
                        <li>
                            <a href="#s">Xã hội</a>
                        </li>
                        <li>
                            <a href="#s">Thế giới</a>
                        </li>
                        <li>
                            <a href="#s">Giáo dục</a>
                        </li>
                        <li>
                            <a href="#s">Giải trí</a>
                        </li>
                        <li>
                            <a href="#s">Nhịp sống trẻ</a>
                        </li>
                    </ul>
                </Col>
                <Col xs={1} sm={1} md={4} lg={4} xl={4} style={{textAlign:'right'}}>
                    <Search
                        placeholder="Tìm kiếm "
                        onSearch={value => console.log(value)}
                        style={{ width: "auto" }}
                        className={styles.search}
                    />
                    <label  for={styles.checkbox_nav} style={{fontSize:18}} className={styles.btn_menu}>
                        <MenuOutlined />
                    </label>
                </Col>
               
                <input type="checkbox" id={styles.checkbox_nav} />

                <div className={styles.overlay}></div>
                <div className={styles.menu_mobile}>
                    <div className={styles.menu_mobile__btnClose}>
                        <label  for={styles.checkbox_nav}>
                            <CloseOutlined style={{fontSize:18}} />
                        </label>
                    </div>
                    <ul>
                        <li>Trang chủ</li>
                        <li>Xã hội</li>
                    </ul>
                </div>
          </Row>
        );
    }
}

export default Header;