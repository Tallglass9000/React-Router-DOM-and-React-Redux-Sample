import React, { Component } from 'react';
import Calendar from 'react-calendar';

export default class CalendarShowHide extends Component {
    state = {
        date: new Date(),
    };

    onChange = (date) => this.setState({ date });

    render() {
        return (
            <div>
                <Calendar
                    calendarType="US"
                    selectRange={false}
                    onChange={this.onChange}
                    value={this.state.date}
                />
            </div>
        );
    }
}