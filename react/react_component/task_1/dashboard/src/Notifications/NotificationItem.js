import React from 'react';
import PropTypes from 'prop-types';
import './NotificationItem.css'

function NotificationItem(props) {

    const { type, html, value } = props;
    
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
        __html: PropTypes.string
    })
}

NotificationItem.defaultProps = {
    type: 'default'
}

export default NotificationItem;