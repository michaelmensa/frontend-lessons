import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import close from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

const buttonCss = {
    position: 'absolute',
    top: '0',
    right: '1px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer'
};

function Notifications(props) {

    const { displayDrawer, listNotifications } = props;

    const handleClick = () => {
        console.log('Close button has been clicked');
    };
    if (displayDrawer === true) {
        return (
            <>
            <div className='menuItem'>
                <p>Your notifications</p>
            </div>
            <div className='Notifications'>
                <button 
                    style={buttonCss}
                    aria-label='Close'
                    onClick={handleClick}
                >
                    <img src={close} alt='close icon'></img>
                </button>
                <p>Here is the list of notifications</p>
                <ul>
                    {listNotifications.length === 0 ? (
                        <p>No new notification for now</p>
                    ) : (
                        listNotifications.map(notification => (
                            <NotificationItem key={notification.id} type={notification.type} html={notification.__html} value={notification.value} />
                        ))
                    )}
                </ul>
            </div>
            </>
        );
    } else {
        return (
            <div className='menuItem'>
                <p>Your notifications</p>
            </div>
        );
    }
}

Notifications.PropTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
}

export default Notifications;