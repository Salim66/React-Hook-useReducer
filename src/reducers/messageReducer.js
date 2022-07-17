export const initialMessage = {
    name: 'Alo',
    age: 120,
    skill: 'IOS Devs',
    error: false,
};
export const messageReducer = (state, { type, payload }) => {
    
    switch(type){
        case 'DEVS_DATA_LOAD':
            return state = { ...state, ...payload };
        case 'ERROR_LOAD':
            let err_val = ( payload.error === 'Start' ) ? true : false;
            console.log(err_val);
            return state = { ...state, error: err_val }

        default : 
            return state;
    }

}
