import React, { Component } from 'react';
import { DataTable } from './DataTable';
import { DateRange } from '../global/ui/DateRange';

export class SofokeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    }
  }

  componentDidMount() {
    this.fetch();
  }

  fetch = () => {
    this.setState({
      loading: true,
    });
    const { fetchByRangeDate } = this.props;
    fetchByRangeDate()
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

  onGo = () => {
    this.fetch();
  }

  onChange = (ranges) => {
    const { changeDateRange } = this.props;
    changeDateRange(ranges);
  }

  render() {
    const { sofoke, startDate, endDate } = this.props;
    const { loading } = this.state;
    return (
      <div>
        <DateRange
          onGo={this.onGo}
          startValue={startDate}
          endValue={endDate}
          onChange={this.onChange}
        />
        <h2>Sofoke</h2>
        <DataTable
          loading={loading}
          data={sofoke}
        />
      </div>
    )
  }
}