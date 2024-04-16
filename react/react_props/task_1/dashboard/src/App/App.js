import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import './App.css';

function App(props) {

  const { isLoggedIn=false } = props;

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
        <CourseList listCourses={listCourses} />
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
