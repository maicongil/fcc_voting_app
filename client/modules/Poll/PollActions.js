import callApi from '../../util/apiCaller';

export const ADD_POLLS = 'ADD_POLLS';

export function addPolls(polls) {
  return {
    type: ADD_POLLS,
    polls,
  };
}

export function fetchPolls() {
  return (dispatch) => {
    return callApi('polls').then(res => {
      dispatch(addPolls(res.polls));
    });
  };
}