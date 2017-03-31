import React from 'react';
import PollListItem from './PollListItem/PollListItem'


function renderPollListItem(polls){
    return polls.map( poll => {
        return  <PollListItem />;
    })
}


function PollList(props){

    return (
        <div>
            Poll List
            { renderPollListItem(props.polls) }
        </div>
    );
}

export default PollList;