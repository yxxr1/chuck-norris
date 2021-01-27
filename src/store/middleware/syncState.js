
export default store => next => action => {
    if(action.type === 'ADD_ITEM'){
        let state = store.getState();
        localStorage['state'] = JSON.stringify(
            state.concat(action.item)
        );
    }
    next(action)
}