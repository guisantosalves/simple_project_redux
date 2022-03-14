import React, {Component} from "react";
import PostDetail from "./PostDetail";

class PostList extends Component {
    render(){
        return (
            <div className="container">
                <div className="row">
                    <PostDetail />
                    <PostDetail />
                    <PostDetail />
                    <PostDetail />
                </div>
            </div>
        )
    }
}

export default PostList;