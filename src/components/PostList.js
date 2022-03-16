import React from "react";
import {PostDetail} from "./PostDetail";
import  {useSelector}  from "react-redux";

export const PostList = () => {
  //console.log(this.props)
  //na função map ele percorre cada item individualmente
  //The selector is approximately equivalent to the mapStateToProps argument to connect conceptually. The selector will be called with the entire Redux store state as its only argument.
  
  const gettingPosts = useSelector(state => state.posts)
  return (
    <div className="container">
      <div className="row">
        {gettingPosts &&
          gettingPosts.map((post) => <PostDetail post={post} key={post.id} />)}
      </div>
    </div>
  );
};

//usar mapDispatchToProps quando é pra setar dados ou actions para o store(postReducer)
//usar o mapStateToProps quando é pra buscar dados do store(postReducer)
// const mapStateToProps = (state) => {
//   return {
//     posts: state.posts,
//   };
// };

// export default connect(mapStateToProps)(PostList);
