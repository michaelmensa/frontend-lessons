import React from 'react';
import PropTypes from 'prop-types';
import './NotificationItem.css'

function NotificationItem({ type, html, value }) {
    
    return (
        <li
        data-notification-type={type}
        dangerouslySetInnerHTML={html}
        >
            {value}
        </li>
    );
}

NotificationItem.PropTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    html: PropTypes.objectOf({
        _html: PropTypes.string
    })
}

export default NotificationItem;