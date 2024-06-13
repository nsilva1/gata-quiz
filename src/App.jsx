import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Rewards from './components/Rewards';
import { Home } from './components/Home';
import Error from './components/common/Error';
// import Game from './components/Game';
// import AlertModal from './components/common/AlertModal';
// import Navbar from './components/common/Navbar';
// import Login from './components/auth/Login';
// import Register from './components/auth/Register';

import { AppProvider } from './context/AppContext';
import ToastNotification from './components/utils/ToastNotification';
// import Layout from './components/dashboard/Layout';
// import DashboardHome from './components/dashboard/DashboardHome';
// import { SuccessPage } from './components/common/SuccessPage';

let toastNotification = <ToastNotification />;

function App() {
  return (
    <AppProvider>
      <div className='w-full h-full overflow-hidden'>
        <BrowserRouter>
          {toastNotification}
          <div className=''>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='*' element={<Error />} />
              {/* <Route path='/reward' element={<Rewards />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route
                path='/module/:id'
                element={
                  <Layout>
                    <Game />
                  </Layout>
                }
              />
              <Route
                path='/dashboard'
                element={
                  <Layout>
                    <DashboardHome />
                  </Layout>
                }
              />
              <Route
                path='/success'
                element={
                  <Layout>
                    <SuccessPage />
                  </Layout>
                }
              /> */}
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </AppProvider>
  );
}

export default App;
