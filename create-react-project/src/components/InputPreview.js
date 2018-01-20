import React from 'react';

export default class InputPreview extends React.Component {
    render () {
        const enterText = ((e) => this.props.onChange(e.target.value));
        return (
            <div>
                <input
                    type="text"
                    value={this.props.value}
                    onChange={enterText}
                />
            </div>
        )
    }
}