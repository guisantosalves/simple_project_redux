const initState = {
    posts:[
        {id: 1, title:'post one', content: 'this is post one'},
        {id: 2, title:'post two', content: 'this is post two'},
        {id: 3, title:'post three', content: 'this is post three'}
        
    ],
}

//state recebe os dados do initState
const postReducer = (state = initState, action) => {
    //console.log(state, action);
    switch(action.type){
        case 'DELETE_POST':
            const newPost = state.posts.filter(post => post.id !== action.id)
        return {
            posts: newPost,
        }
        
    }

    return state
};

export default postReducer;