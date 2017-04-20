import React from 'react';
import { Link } from 'react-router'
import PollModal from '../PollModal/PollModal';
import { List, Button } from 'semantic-ui-react';

function PollListItem(props){
    return (
        <List.Item>
            <List.Content floated='right'>
                <Button color="red" >Delete</Button>
                <Button color="blue" >Edit</Button>
            </List.Content>
            <List.Content>
                <PollModal poll={props.poll}/>
            </List.Content>
        </List.Item>
    );
}

export default PollListItem;