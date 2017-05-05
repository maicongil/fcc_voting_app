import React, { Component } from 'react';
import { Modal, Button, Form, Input } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import PollNameInput from './PollNameInput';
import PollOptionInput from './PollOptionInput';

class PollCreateModal extends Component{

     constructor(props) {
        super(props);
        this.state = {
        options: [{removable : false}, {removable : false}],
        modalOpen : false
        };
    }


    //TODO - Transfer this control to PollListPage
    handleOpen = (e) => this.setState({modalOpen : true});
    handleClose = (e) => this.setState({modalOpen : false});

    addOption = () => this.setState({options : [...this.state.options, {removable : true}]});
    //removeOption = (removeIndex) => this.setState({options : this.state.options.filter((option, index) => removeIndex !== index)});

    renderOptions(){
        return(
            this.state.options.map((option,index) => (
                <Form.Field>
                    <Field name={`options[${index}].title`} component={PollOptionInput} props={{number : index + 1 }}/>
                </Form.Field>)
                )
        )
    }

    render(){
        
        const { handleSubmit } = this.props;

        return (
            <Modal trigger={<Button onClick={ this.handleOpen }>New Poll</Button>} open={this.state.modalOpen} onClose={ this.handleClose }>
                <Modal.Header>
                  New Poll  
                </Modal.Header>
                <Modal.Content>
                    <Form onSubmit={handleSubmit}>
                        <Form.Field>
                            <Field name="title" component={PollNameInput} />
                        </Form.Field>
                        { this.renderOptions()}
                        <Form.Field>
                            <Button.Group>
                                <Button onClick={ this.handleClose }>Cancel</Button>
                                <Button.Or />
                                <Form.Button content="Submit" positive/>
                            </Button.Group>
                        </Form.Field>                    
                    </Form>
                    <Button primary onClick={ this.addOption } >Add new Option</Button>                    
                </Modal.Content>
            </Modal>
        );
    }
}

PollCreateModal = reduxForm({
  form: 'pollCreate'
})(PollCreateModal);

export default PollCreateModal;