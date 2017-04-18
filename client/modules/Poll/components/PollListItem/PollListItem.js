import React from 'react';
import { Link } from 'react-router'

function PollListItem(props){
    return (
        <li>
            <Link to={`/polls/${props.poll._id}`}>{props.poll.title}</Link>
        </li>
    );
}

export default PollListItem;