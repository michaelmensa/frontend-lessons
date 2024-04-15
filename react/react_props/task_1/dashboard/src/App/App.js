import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import './App.css';

function App({ isLoggedIn }) {
  if (isLoggedIn === false) {
    return (
      <>
    <div className="App">
      <Notifications />
      <Header />
      <Login />
      <Footer />
    </div>
    </>
    )
  }
  else {
    return (
      <>
      <div className="App">
        <Notifications />
        <Header />
        <CourseList />
        <Footer />
      </div>
      </>
    );
  }
}


App.PropTypes = {
  isLoggedIn: PropTypes.bool,
}

export default App;
