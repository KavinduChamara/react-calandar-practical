import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Login from './Pages/Login';
import ToDo from './Pages/ToDo';

const PrivateRoute = (props) => {
  const auth = localStorage.getItem('JWT') ? true : false;
  return auth ? props.component : <Navigate to="/" />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route exact path='/to-do' element={<PrivateRoute component={<ToDo />}/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;