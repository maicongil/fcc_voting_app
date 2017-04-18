import React from 'react';
import PollListItem from './PollListItem/PollListItem'

function PollList(props){

    return (
          <div>
            <ul>
            {
                props.polls.map(poll => (
                    <PollListItem poll={poll} key={poll._id} />
                ))
            }
            </ul>
           </div>
    );
}

export default PollList;