import React from 'react';
import { Input } from 'semantic-ui-react';


export default function PollNameInput(props){

    return (
            <Input  {...props}
                    label={{ basic: true, content: '?' }}
                    labelPosition='right'
                    placeholder='Enter question...'
                />
        );
}