const hotelsReducer = ( state = '', action) => {
    switch (action.type) {
        case 'CHANGE_HOTEL':
            return action.payload;
        default:
            return state;
    }
        
};

export default hotelsReducer;