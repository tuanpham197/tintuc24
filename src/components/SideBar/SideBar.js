import React, { Component } from 'react';
import { Layout } from 'antd';
import styles  from './style.scss'

class SideBar extends Component {
    render() {
        return (
            <Layout>
                <div className={styles.sidebar_ads}>
                    <img src="assets/image/image-post-category.png"/>
                </div>
                <div className={styles.post_popular}>
                    <div className={styles.post_popular__title}>
                        <h5>Đọc nhiều nhất</h5>   
                    </div>
                    <div className={styles.list_post}>
                        <div className={styles.list_post__item}>
                            <a>
                                <img src="assets/image/image-relate-post.png" />
                                <h4>Ngân hàng có kế hoạch tuyển hàng nghìn nhân sự</h4>
                            </a>
                        </div>
                        <div className={styles.list_post__item}>
                            <a>
                                <img src="assets/image/image-relate-post.png" />
                                <h4>Ngân hàng có kế hoạch tuyển hàng nghìn nhân sự</h4>
                            </a>
                        </div>
                        <div className={styles.list_post__item}>
                            <a>
                                <img src="assets/image/image-relate-post.png" />
                                <h4>Ngân hàng có kế hoạch tuyển hàng nghìn nhân sự</h4>
                            </a>
                        </div>
                        <div className={styles.list_post__item}>
                            <a>
                                <img src="assets/image/image-relate-post.png" />
                                <h4>Ngân hàng có kế hoạch tuyển hàng nghìn nhân sự</h4>
                            </a>
                        </div>
                        <div className={styles.list_post__item}>
                            <a>
                                <img src="assets/image/image-relate-post.png" />
                                <h4>Ngân hàng có kế hoạch tuyển hàng nghìn nhân sự</h4>
                            </a>
                        </div>
                    </div>
                </div>
            </Layout>
            
        );
    }
}

export default SideBar;