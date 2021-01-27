
let initialState = [];
try {
    initialState = JSON.parse(
        localStorage['state']
    )
} catch(e){
    //
}

export default (state = initialState, action) => {
    switch(action.type){
        case 'ADD_ITEM':
            return [ ...state, action.item ];
        default:
            return state;
    }
}