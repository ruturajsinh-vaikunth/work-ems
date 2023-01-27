import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import ProtectedRoute from './routing/ProtectedRoute';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Leaves from './components/Leaves';
import Attendance from './components/Attendance';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
   <Router>
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route element={<ProtectedRoute />}>
      <Route path='/Dashboard' element={<Dashboard />} />
      <Route path='/profile-page' element={<Profile />} />
      <Route path='/leaves' element={<Leaves />} />
      <Route path='/attendance' element={<Attendance />} />
      </Route>
    </Routes>
   </Router>
  );
}

export default App;
