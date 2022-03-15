import React, {Component} from 'react';

class PostDetail extends Component {
    render(){
        console.log(this.props)
        return(
            <div className='col s12 m6'>
                <div className='card'>
                    <div className='card-content'>
                        <span className='card-title'>{this.props.post.title}</span>
                        <p>{this.props.post.content}</p>
                    </div>
                    <div className='card-action'>
                        <button className='btn red'>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostDetail;