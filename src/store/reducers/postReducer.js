const initState = {
    posts:[],
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
        case 'ADD_POST':
            return {
                // O Spread Operator é usado com bastante frequência principalmente quando queremos 
                // utilizar a imutabilidade, ou seja, criar um objeto novo a partir de um objeto existente.
                // ACTION RECEBE A MUDANÇA E PASSA A MUDANÇA PARA O STATE
                // view -> actions -> state
                posts: [action.post, ...state.posts],
            }
        default:
            return state;
    }
};

export default postReducer;