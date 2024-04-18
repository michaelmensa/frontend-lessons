import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import './App.css';
import { getLatestNotification } from '../utils/utils';
import { Component } from 'react';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

const listCourses = [
  {
    id: 1,
    name: 'ES6',
    credit: 60
  }, 
  {
    id: 2,
    name: 'Webpack',
    credit: 20
  },
  {
    id: 3,
    name: 'React',
    credit: 40
  }
];

const listNotifications = [
  {
    id: 1,
    type: 'default',
    value: 'New course available'
  },
  {
    id: 2,
    type: 'urgent',
    value: 'New resume available',
  },
  {
    id: 3,
    type: 'urgent',
    html: { __html: getLatestNotification() },
  }
]

class App extends Component {

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown(event) {
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    if (this.props.isLoggedIn === false) {
      return (
        <>
      <div className="App">
        <Notifications />
        <Header />
        <BodySectionWithMarginBottom title='Log in to continue'>
          <Login />
        </BodySectionWithMarginBottom>
        <Footer />
      </div>
      </>
      )
    }
    else {
      return (
        <>
        <div className="App">
          <Notifications listNotifications={listNotifications} />
          <Header />
          <BodySectionWithMarginBottom title='Course list'>
            <CourseList listCourses={listCourses} />
          </BodySectionWithMarginBottom>
          <Footer />
        </div>
        </>
      );
    }
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {}
}

export default App;
