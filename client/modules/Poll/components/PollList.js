import React from 'react';
import PollListItem from './PollListItem/PollListItem'
import { List } from 'semantic-ui-react';

function PollList(props){

    return (
          <div>
            <List divided verticalAlign='middle'>
            {
                props.polls.map(poll => (
                    <PollListItem poll={poll} key={poll._id} />
                ))
            }
            </List>
           </div>
    );
}

export default PollList;