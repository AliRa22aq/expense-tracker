export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSECTION':
            return {
                ...state,
                transections: [action.payload, ...state.transections]

            }
        
        case 'ADD_TRANSECTION':
            return {
                ...state,
                transections: state.transections
                    .filter(transection => transection.id !== action.payload)

            }    

        default:
            return state;
    }
}