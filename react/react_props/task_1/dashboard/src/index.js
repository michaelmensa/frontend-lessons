import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import Notifications from './Notifications/Notifications';

const notifications = ReactDOM.createRoot(document.getElementById('root-notifications'));
const root = ReactDOM.createRoot(document.getElementById('root'));
notifications.render(
  <React.StrictMode>
    <Notifications />
  </React.StrictMode>
)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
