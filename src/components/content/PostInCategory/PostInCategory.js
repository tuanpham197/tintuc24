import React, { Component } from 'react';
import  styles  from './style.scss';
import { Layout,Row, Col} from 'antd';
const style = { padding: '0 15px 0 0' };

class PostInCategory extends Component {

   showPost = (posts)=>{
        let arr = posts.filter(ele=>ele._id !== posts[0]._id);
        return arr.map((ele,index)=>{
            return <div className={styles.post_category} key={index}>
                        <a className={styles.post_relate}>
                            <img src="src/assets/image/post-relate.png" />
                            <h5>{ele.title}</h5>
                        </a>
                    </div>
        })
   }
    render() {
        let {title,items} = this.props;
        return (
            <Layout className={styles.top}>
                <div className={styles.category}>
                    <h5>{title}</h5>
                </div>
                <div className={styles.list_post}>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={15} xl={15} span={15}>
                            <div className={styles.main_post} style={style}>
                                <h4>{items[0].title}</h4>
                                <div className={styles.main_post__content}>
                                    <div className={styles.main_post__content_img}>
                                        <img src="src/assets/image/image-post-category.png" />
                                    </div>
                                    <p>{items[0].content}</p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={9} xl={9} span={9} className={styles.mobie_respon}>
                            {this.showPost(items)}
                        </Col>  
                    </Row>
                </div>
            </Layout>
        );
    }
}

export default PostInCategory;