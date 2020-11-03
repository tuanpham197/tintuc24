import React, { Component } from 'react';
import {connect} from 'react-redux';
import NewPost from '../components/content/NewPosts/NewPost';

class PostContainer extends Component {
    componentDidMount(){
        console.log(this.props," container ");
    }
    render() {
        var {posts} = this.props;
        return (
           <h1>l</h1>
        );
    }
}

const mapStateToProps = state =>{
    return {
        posts : state.posts
    }
}
export default connect(mapStateToProps,null)(PostContainer);