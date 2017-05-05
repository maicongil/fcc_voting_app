import React, { Component } from 'react';
import { connect } from 'react-redux';
import PollList from '../../components/PollList';
import PollCreateModal from '../../components/PollCreateModal/PollCreateModal';
import { fetchPolls, createPoll } from '../../PollActions';
import { Container, Button } from 'semantic-ui-react';


class PollListPage extends Component{

  componentDidMount() {
    this.props.dispatch(fetchPolls());
  }
  
  submit = (poll) => {
    this.props.dispatch(createPoll(poll));
  } 

    render(){
        return (
            <Container fluid>
            <Container textAlign='right'>
                <PollCreateModal onSubmit={this.submit} />
                <Button>My Polls</Button>
            </Container>
            <PollList polls={ this.props.polls } />
            </Container>
            );
    };
}

PollListPage.need = [() => { return fetchPolls(); }];

function mapStateToProps(state){
    return { polls : state.polls.data };
}

export default connect(mapStateToProps)(PollListPage);