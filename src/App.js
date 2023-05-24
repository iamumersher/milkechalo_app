import './App.css';
import ForgetPassword from './components/layout/beforelogin/ForgetPassword';
import SignIn from './components/layout/beforelogin/SignIn';
import SignUp from './components/layout/beforelogin/SignUp';
import BeforeLoginLayout from './pages/BeforeLoginLayout';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import AfterLoginLayout from './pages/AfterLoginLayout';
import FindPool from './components/layout/afterlogin/FindPool';
import OfferPool from './components/layout/afterlogin/OfferPool';
import UserProfile from './components/layout/afterlogin/UserProfile';
import RidesDisplay from './components/layout/afterlogin/RidesDisplay';


function App() {
  return (
    <>
 

<BrowserRouter>
      <Routes>
        <Route path="/" element={<BeforeLoginLayout />}>
          <Route index element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="forgetpassword" element={<ForgetPassword />} />
        </Route>
        </Routes>
        
        <Routes>
        <Route path="/dashboard" element={<AfterLoginLayout />}>
        <Route index element={<RidesDisplay />} />
        <Route path="/dashboard/profile" element={<UserProfile />} />
          <Route path="/dashboard/offerpool" element={<OfferPool />} />
          <Route path="/dashboard/findpool" element={<FindPool />} />

        </Route>
        </Routes>
      
    </BrowserRouter>
  </>
  );
}

export default App;
