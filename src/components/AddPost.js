import React, {useState} from "react";
//import {connect} from "react-redux";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addPost } from "../store/actions/postAction";

export const AddPost = () => {
  const [post, setPost] = useState({
      id:'',
      title:'',
      content: ''
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    //console.log(e.target.value)
    setPost({...post, [e.target.name]: e.target.value});
    //do name (o que sera enviado pelo post) recebe o value que o usuário digitou
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state.post)
    //chama do reducer e insere na function
    dispatch(addPost(post));
    setPost({

        id: uuidv4(),
        title: "",
        content: "",
      
    });
  };

  return (
    <div className="container" style={{ magin: "4rem auto" }}>
      <h5 className="blue-text center-align">CandBlog</h5>
      <form onSubmit={handleSubmit}>

        <div className="input-field">
          <label htmlFor="post_title">Title</label>
          <input
            onChange={handleChange}
            value={post.title}
            type="text"
            name="title"
          />
        </div>

        <div className="input-field">
          <label htmlFor="post_content">content</label>
          <textarea
            onChange={handleChange}
            value={post.content}
            name="content"
            className="materialize-textarea"
          ></textarea>
        </div>

        <div className="input-field">
          <button className="btn blue">
            submit
            <i className="material-icons right">send</i>
          </button>
        </div>

      </form>
    </div>
  );
};







//usar mapDispatchToProps quando é pra setar dados ou actions para o store(postReducer)
//usar o mapStateToProps quando é pra buscar dados do store(postReducer)
//incrementa no props do redux
// const mapDispatchToProps = (dispatch) => {
//   return {
//     createPost: (post) => {
//       //post: post
//       dispatch(addPost(post));
//     },
//   };
// };

// export default connect(null, mapDispatchToProps)(AddPost);
//o modo de escrita do connect do redux
//closurem, uma função que se lembra da sua reinicialização
//high order function
//null pq n tem mapStateToProps
