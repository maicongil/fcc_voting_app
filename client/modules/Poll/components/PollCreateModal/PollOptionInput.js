import React from 'react';
import { Input }  from 'semantic-ui-react';

export default function PollOptionInput(props){

     return(
           <Input {...props}
                label={{ basic: true, content: props.number }}
                labelPosition='left'
                placeholder='Enter option...'
                />
    );
}