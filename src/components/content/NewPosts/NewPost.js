import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import styles  from './NewPost.scss'
const style = { padding: '0 0 0 15px' };

class NewPost extends Component {
    showNewPostRelate = (posts)=>{
        var arrPost = posts.slice(0,5);
        let dl = arrPost.map((ele,index)=>{
            return <div className={styles.relate_post} key={index}>
                        <a href="#" >
                            <div className={styles.relate_post__content}>   
                                <img src={`src/assets/image/${ele.thumb}`}/>
                                <h4>{ele.title}</h4>
                            </div>
                        </a>
                    </div>;
        });
        return dl;
    }
    render() {
        var {children} = this.props;
        var posts = children.filter(ele=>{
            return ele._id != children[0]._id;
        });
        return (
            <Layout>
                <Row>
                    <Col xs={24} sm={24} md={24} lg={15} xl={15}>
                        <div className={styles.new_post} >
                            <a href="#">
                                <div>
                                    <img src={`src/assets/image/${children[0].thumb}`} />
                                </div>
                                <h3>{children[0].title}</h3>
                                <p>{children[0].content}</p>
                            </a>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={24} lg={9} xl={9} style={style} className={styles.post_relate_respon}>
                        {this.showNewPostRelate(posts)}
                    </Col>
                </Row>
            </Layout>
        );
    }
}

export default NewPost;