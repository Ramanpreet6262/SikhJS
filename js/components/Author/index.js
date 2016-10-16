import React, { Component } from 'react';
import { Link } from 'react-router';
import Chip from 'material-ui/Chip';

export class AuthorChip extends Component {
  constructor(p) {
    super(p);
    this.state = { data: {}, loading: true };
  }
  componentDidMount() {
    this.updateData();
  }
  updateData() {
    this.setState({ loading: true });
    fetch(`docs/json/authors/${this.props.id}.json`).then(r => r.json()).then(data => this.setState({ data, loading: false })).catch(e => console.error(e));
  }
  render() {
    const { data, loading } = this.state;
    return <Chip style={{ margin: '0 2px' }}> { loading ? 'Loading' : `${data.author} ${data.gurmukhi}` } </Chip>;
  }
}