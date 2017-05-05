import { ADD_POLLS, ADD_POLL } from './PollActions';

const initialState = { data : [] };

const PollReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POLLS :
            return { 
                data : action.polls, 
            };
        case ADD_POLL :
        return{
            data : [action.post, ...state.data],
        };
        default : return state;
    }
};

export default PollReducer;