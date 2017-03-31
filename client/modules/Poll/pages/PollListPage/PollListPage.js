import React, { Component } from 'react';
import { connect } from 'react-redux';
import PollList from '../../components/PollList';
import { fetchPolls } from '../../PollActions';

class PollListPage extends Component{

  componentDidMount() {
    this.props.dispatch(fetchPolls());
  }

    render(){
        return (
            <div>
                Poll List Page
                <PollList polls={ this.props.polls } />
            </div>
            );
    };
}


PollListPage.need = [() => { return fetchPolls(); }];

function mapStateToProps(state){
    return { polls : state.polls.data };
}

export default connect(mapStateToProps)(PollListPage);