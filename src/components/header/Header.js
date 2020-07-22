import React, { Component } from 'react';
import  styles  from './header.scss';
import { Row, Col ,Input} from 'antd';
const { Search } = Input;

class Header extends Component {
    render() {
        return (
            <Row className={styles.header}>
                <Col xs={2} sm={2} md={2} lg={2} xl={2}>
                    <a href="#">
                        <h2 >TINTUC24s</h2>
                    </a>
                </Col>
                <Col xs={1} sm={1} md={1} lg={1} xl={2}>
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
                <Col xs={2} sm={4} md={4} lg={4} xl={4}>
                    <Search
                        placeholder="Tìm kiếm"
                        onSearch={value => console.log(value)}
                        style={{ width: "auto" }}
                    />
                </Col>
          </Row>
        );
    }
}

export default Header;