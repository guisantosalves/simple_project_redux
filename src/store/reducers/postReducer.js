const initState = {
    posts:[
        {id: 1, title:'post one', content: 'this is post one'},
        {id: 2, title:'post two', content: 'this is post two'},
        
    ],
}
//state recebe os dados do initState
const postReducer = (state = initState, action) => {
    return state
};

export default postReducer;