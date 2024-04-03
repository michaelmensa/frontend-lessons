import React from 'react';
import './Notifications.css';
import close from './close-icon.png';
import { getLatestNotification } from './utils';

const buttonCss = {
    position: 'absolute',
    top: '15px',
    right: '15px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer'
}

function Notifications() {
    const handleClick = () => {
        console.log('Close button has been clicked');
    };
    return (
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
                <li data-priority='default'>New course available</li>
                <li data-priority='urgent'>New resume available</li>
                <li data-priority='urgent' dangerouslySetInnerHTML={{  __html: getLatestNotification()}}></li>
            </ul>
        </div>
    );
}

export default Notifications;