import React, { Component } from 'react';
import { DateRangePicker } from 'react-dates';

import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null,
            focusedInput: null,
        };
    }

    render() {
        return (
            <div className="date-range-picker">
                <DateRangePicker
                    startDate={this.state.startDate}
                    startDateId="start-date"
                    endDate={this.state.endDate}
                    endDateId="end-date"
                    onDatesChange={({ startDate, endDate }) => {this.setState({ startDate, endDate })}}
                    focusedInput={this.state.focusedInput}
                    onFocusChange={(focusedInput) => {this.setState({ focusedInput })}}
                />
            </div>
        );
    }
}

export { DatePicker };