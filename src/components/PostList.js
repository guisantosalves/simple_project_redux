import React, {Component} from "react";
import PostDetail from "./PostDetail";
import {connect} from 'react-redux';

class PostList extends Component {
    render(){
        //console.log(this.props)
        //na função map ele percorre cada item individualmente
        const gettingPosts = this.props.posts;
        return (
            <div className="container">
                <div className="row">
                    {gettingPosts && gettingPosts.map(post => <PostDetail post={post} key={post.id} />)}

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    }
}

export default connect(mapStateToProps)(PostList);