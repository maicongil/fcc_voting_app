import callApi from '../../util/apiCaller';

export const ADD_POLLS = 'ADD_POLLS';
export const ADD_POLL = 'ADD_POLL';

export function addPolls(polls) {
  return {
    type: ADD_POLLS,
    polls,
  };
}

export function addPoll(poll){
  return {
    type : ADD_POLL,
    poll,
  };
}

export function fetchPolls() {
  return (dispatch) => {
    return callApi('polls').then(res => {
      dispatch(addPolls(res.polls));
    });
  };
}

export function createPoll(poll){
  console.log('Create poll ', poll);
  return(dispatch) => {
    return callApi('polls', 'post', poll).then(res => {
      dispatch(addPoll(res));
    });
  }
}