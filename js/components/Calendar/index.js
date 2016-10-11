import React, { Component } from 'react';
import ReactMarkdown from 'react-remarkable';
import { loading } from '../../constants';
import { Container } from 'reactstrap';

export default class Calendar extends Component {
  constructor (props) {
    super (props);
    this.state = { file: loading };
    fetch(`docs/calendar.md`).then(r => r.text()).then(file => this.setState({ file }));
  }
  render () {
    return (
      <Container className="text-lg-left">
        <ReactMarkdown source={this.state.file} />
      </Container>
    );
  }
}
