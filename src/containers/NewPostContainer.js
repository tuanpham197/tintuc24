import React, { Component } from 'react';
import {connect} from 'react-redux';
import NewPost from '../components/content/NewPosts/NewPost';

class PostContainer extends Component {
    render() {
        var {posts} = this.props;
        return (
            <NewPost>
                {posts}
            </NewPost>
        );
    }
}

const mapStateToProps = state =>{
    return {
        posts : state.post
    }
}
export default connect(mapStateToProps,null)(PostContainer);