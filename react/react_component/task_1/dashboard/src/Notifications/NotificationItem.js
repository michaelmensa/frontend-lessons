import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NotificationItem.css'


class NotificationItem extends Component {
    render() {
        return (
            <li
            data-notification-type={this.props.type}
            dangerouslySetInnerHTML={this.props.html}
            onClick={() => this.props.markAsRead(this.props.id)}
            >
                {this.props.value}
            </li>
        );
    }
}

NotificationItem.propTypes = {
    id: PropTypes.number,
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    html: PropTypes.objectOf({
        __html: PropTypes.string
    }),
    markAsRead: PropTypes.func,
}

NotificationItem.defaultProps = {
    type: 'default',
    markAsRead: () => {}
}

export default NotificationItem;