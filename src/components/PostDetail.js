import React, {Component} from 'react';
import {connect} from 'react-redux';

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
                        <button onClick={() => this.props.deletePost(this.props.post.id)} className='btn red'>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}

//incrementa no props do redux
const mapDispatchToProps = (dispatch) =>{
    return {
        deletePost: (id) => {
            dispatch({type: 'DELETE_POST', id})
        }
    }
}

export default connect(null, mapDispatchToProps)(PostDetail);
//o modo de escrito do connect do redux
//closurem, uma função que se lembra da sua reinicialização
//high order function 
//null pq n tem mapStateToProps
