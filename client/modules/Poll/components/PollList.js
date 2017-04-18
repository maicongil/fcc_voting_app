import React from 'react';
import PollListItem from './PollListItem/PollListItem'

function PollList(props){

    return (
          <div className="listView">
            <p>Poll List</p>
            {
                props.polls.map(poll => (
                <PollListItem title={poll.title}/>
                ))
            }
           </div>
    );
}

export default PollList;