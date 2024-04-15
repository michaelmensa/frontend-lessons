import React from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import close from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import PropTypes from 'prop-types';

const buttonCss = {
    position: 'absolute',
    top: '0',
    right: '1px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer'
};

function Notifications({ displayDrawer=false }) {
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
                    <NotificationItem type='default' value='New course available'/>
                    <NotificationItem type='urgent' value='New resume available'/>
                    <NotificationItem type='urgent' html={{ __html: getLatestNotification() }}/>
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
};

export default Notifications;