import React from 'react';
import {Grid, Form, Radio, Label, Button, Header, Image, Modal, Divider, Card } from 'semantic-ui-react';
import { Pie } from 'react-chartjs';

const PollModal = (props) => (
  <Modal trigger={<Label as="a">{props.poll.title}</Label>}>
    <Modal.Header>{props.poll.title}</Modal.Header>
    <Modal.Content>
    <Grid columns={2} divided>
      <Grid.Row>
        <Grid.Column>
          <Form>
              {props.poll.options.map(option => (
                <Form.Field >
                  <Radio label={option.title} name="pollAnswer" value={option._id} />
                </Form.Field>
              ))}

              <Card.Group>
                <Card fluid color='red' header='Option 1' />
                <Card fluid color='orange' header='Option 2' />
                <Card fluid color='yellow' header='Option 3' />
            </Card.Group>

            <Divider/>
            <Button color="blue">Submit</Button>
            <Button color="blue">Add new option</Button>
            <Button color="blue">Share</Button>
          </Form>
        </Grid.Column>
        <Grid.Column>
          <h3>Results</h3>
           <Pie data={[{blue:123},{red:456}]} />
        </Grid.Column>
        </Grid.Row>
      </Grid>
    </Modal.Content>
  </Modal>
)

export default PollModal