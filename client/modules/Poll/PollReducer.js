import { ADD_POLLS } from './PollActions';

const initialState = { data : [] };

const PollReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POLLS :
            console.log('-------POLLS');
            return { 
                data : action.polls, 
            };
        default : return state;
    }
};

export default PollReducer;