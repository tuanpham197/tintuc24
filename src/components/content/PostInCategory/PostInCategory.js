import React, { Component } from 'react';
import  styles  from './style.scss';
import { Layout,Row, Col} from 'antd';
const style = { padding: '0 15px 0 0' };

class PostInCategory extends Component {
    render() {
        return (
            <Layout className={styles.top}>
                <div className={styles.category}>
                    <h5>Xã hội</h5>
                </div>
                <div className={styles.list_post}>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={15} xl={15} span={15}>
                            <div className={styles.main_post} style={style}>
                                <h4>Việt Nam mong muốn sớm ký hiệp định thương mại với EU</h4>
                                <div className={styles.main_post__content}>
                                    <div className={styles.main_post__content_img}>
                                        <img src="assets/image/image-post-category.png" />
                                    </div>
                                    <p>UBND TP Hồ Chí Minh vừa đồng ý cho một công ty của Nhật Bản hợp tác với Công ty TNHH một thành viên Môi trường đô thị thành phố (Citenco) triển khai Mô hình thử nghiệm nhà máy...</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={9} xl={9} span={9} className={styles.mobie_respon}>
                            <div className={styles.post_category}>
                                <a className={styles.post_relate}>
                                    <img src="assets/image/post-relate.png" />
                                    <h5>Năng lượng Mặt trời: Những ý tưởng sáng tạo và ngộ nghĩnh</h5>
                                </a>
                            </div>
                            <div className={styles.post_category}>
                                <a className={styles.post_relate}>
                                    <img src="assets/image/post-relate.png" />
                                    <h5>Năng lượng Mặt trời: Những ý tưởng sáng tạo và ngộ nghĩnh</h5>
                                </a>
                            </div>
                        </Col>  
                    </Row>
                </div>
            </Layout>
        );
    }
}

export default PostInCategory;