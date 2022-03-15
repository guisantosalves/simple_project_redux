import React, {Component} from 'react';
import {connect} from 'react-redux';

class PostDetail extends Component {
    render(){
        //console.log(this.props)
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

//usar mapDispatchToProps quando é pra setar dados ou actions para o store(postReducer)
//usar o mapStateToProps quando é pra buscar dados do store(postReducer)
//incrementa no props do redux
const mapDispatchToProps = (dispatch) =>{
    return {
        deletePost: (id) => {
            //representa o action no reducer
            dispatch({type: 'DELETE_POST', id})
        }
    }
}

export default connect(null, mapDispatchToProps)(PostDetail);
//o modo de escrita do connect do redux
//closurem, uma função que se lembra da sua reinicialização
//high order function 
//null pq n tem mapStateToProps
