import React, { Component } from 'react';
import { DataTable } from './DataTable';

export class CookieComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }
  }

  componentDidMount() {
    const { fetchAll } = this.props;
    fetchAll()
      .then(() => {
        this.setState({
          loading: false,
        });
      })
      .catch(() => {
        this.setState({
          loading: false,
        });
      })
  }

  render() {
    const { cookies } = this.props;
    const { loading } = this.state;
    return (
      <div>
        <h2>Cookies</h2>
        <DataTable
          loading={loading}
          data={cookies}
        />
      </div>
    )
  }
}