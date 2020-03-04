import React, { Component } from 'react';
import styled from 'styled-components';
import { DatePicker, Button, Icon, Dropdown, Menu } from 'antd';
import moment from 'moment';
import PropTypes from 'prop-types';
import { dateRanges } from '../../../constants/AppConstants';

export class DateRange extends Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialState();
  }

  getInitialState = () => ({
    endOpen: false,
  })

  handleStartOpenChange = open => {
    if (!open) {
      const { endValue } = this.props;
      if (!endValue) {
        this.setState({ endOpen: true });
      }
    }
  };

  onChange = (field, value) => {
    const { onChange } = this.props;
    const ranges = {
      [field]: value,
    }
    onChange(ranges);
  };

  handleEndOpenChange = open => {
    this.setState({ endOpen: open });
  };

  disabledStartDate = startValue => {
    const { endValue } = this.props;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  };

  disabledEndDate = endValue => {
    const { startValue } = this.props;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  };
  
  onChangeRange = (item) => {
    const { key } = item;
    if (key) {
      const startDate = moment().startOf(key);
      const endDate = moment().endOf(key);
      const { onChange } = this.props;
      onChange({
        startDate,
        endDate
      })
    }
  }

  onGo = () => {
    // const { startValue, endValue } = this.state;
    const { onGo } = this.props;
    onGo();
    // onGo(startValue, endValue);
  }

  getMenu = () => {
    return (
      <Menu onClick={this.onChangeRange}>
        {
          dateRanges.map(({ label, value }) => (
            <Menu.Item key={value}>{label}</Menu.Item>
          ))
        }
      </Menu>
    )
  }

  render() {
    const { endOpen } = this.state;
    const { startValue, endValue } = this.props;
    const menu = this.getMenu();
    return (
      <Wrapper>
        <Dropdown overlay={menu}>
          <Button>
            Date Range <Icon type="down" />
          </Button>
        </Dropdown>
        <DatePicker
          disabledDate={this.disabledStartDate}
          showToday={false}
          format="YYYY-MM-DD MMMM"
          value={startValue}
          placeholder="Start"
          onChange={value => this.onChange('startDate', value)}
          onOpenChange={this.handleStartOpenChange}
        />
        <DatePicker
          disabledDate={this.disabledEndDate}
          showToday={false}
          format="YYYY-MM-DD MMMM"
          value={endValue}
          onChange={value => this.onChange('endDate', value)}
          placeholder="End"
          open={endOpen}
          onOpenChange={this.handleEndOpenChange}
        />
        <Button.Group>
          <Button
            onClick={this.onGo}
          >
            Go
          </Button>
        </Button.Group>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  width: 100%;
  padding: 20px 0;
  margin: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

DateRange.propTypes = {
  onGo: PropTypes.func,
  startValue: PropTypes.instanceOf(Object),
  endValue: PropTypes.instanceOf(Object)
};

DateRange.defaultProps = {
  onGo: () => {},
  startValue: null,
  endValue: null,
};
