import React, { Component } from 'react';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import close from '../assets/close-icon.png';
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

const handleClick = () => {
    console.log('Close button has been clicked');
};

class Notifications extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.markAsRead = this.markAsRead.bind(this);
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`)
    }

    render() {
        if (this.props.displayDrawer === true) {
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
                        {this.props.listNotifications.length === 0 ? (
                            <p>No new notification for now</p>
                        ) : (
                            this.props.listNotifications.map(notification => (
                                <NotificationItem key={notification.id} type={notification.type}
                                html={notification.__html}
                                value={notification.value}
                                markAsRead={this.markAsRead} />
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
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
    displayDrawer: false,
    listNotifications: []
}

export default Notifications;