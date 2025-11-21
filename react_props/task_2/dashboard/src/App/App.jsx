import Header from '../Header/Header'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import Notifications from '../Notifications/Notifications'
import './App.css'

const notificationsList = [
  {
      id: 1,
      type: 'default',
      value: 'New course available'
  },
  {
      id: 2,
      type: 'urgent',
      value: 'New resume available'
  },
  {
      id: 3,
      type: 'urgent',
      value: '<strong>Urgent requirement</strong> - complete by EOD'
  }
];

function App() {
  return (
    <>
      <Notifications notifications={notificationsList} />
      <Header />
      <Login />
      <Footer />
    </>
  );
}

export default App;
