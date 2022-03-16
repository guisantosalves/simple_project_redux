import React from "react";
import { useDispatch } from "react-redux";
import { deletePost } from "../store/actions/postAction";

export const PostDetail = ({post}) => {
  //console.log(this.props)

  const dispatch = useDispatch();
  return (
    <div className="col s12 m6">
      <div className="card">

        <div className="card-content">
          <span className="card-title">{post.title}</span>
          <p>{post.content}</p>
        </div>

        <div className="card-action">
          <button
            onClick={() => dispatch(deletePost(post.id))}
            className="btn red"
          >
            Delete
          </button>
        </div>

      </div>
    </div>
  );
};

//usar mapDispatchToProps quando é pra setar dados ou actions para o store(postReducer)
//usar o mapStateToProps quando é pra buscar dados do store(postReducer)
//incrementa no props do redux
// const mapDispatchToProps = (dispatch) => {
//   return {
//     deletePost: (id) => {
//       //representa o action no reducer
//       dispatch(deletePost(id));
//     },
//   };
// };

// export default connect(null, mapDispatchToProps)(PostDetail);
//o modo de escrita do connect do redux
//closurem, uma função que se lembra da sua reinicialização
//high order function
//null pq n tem mapStateToProps
