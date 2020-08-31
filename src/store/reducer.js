const initialState={
    token:null,
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ADD_TOKEN':
            return {...state,token:action.token}
        case 'REMOVE_TOKEN':
            return {...state,token:null}
        default:
            return state;
    }
}

export default reducer;