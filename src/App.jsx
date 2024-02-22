import LayoutComponent from './layout/LayoutComponent';
import { useState } from 'react';
import Router from './routes/Router';
import LoginContext from './store/loginContext';
import { ToastContainer } from 'react-toastify';
import FilterProvider from './store/filterContext';
import { jwtDecode } from 'jwt-decode';

function App() {
  let token = localStorage.getItem('token');
  let { _id } = token ? jwtDecode(token) : '';
  const [login, setLogin] = useState(_id ? true : false);

  return (
    <LoginContext.Provider value={{ login, setLogin }}>
      <FilterProvider>
        <ToastContainer />
        <LayoutComponent>
          <Router />
        </LayoutComponent>
      </FilterProvider>
    </LoginContext.Provider>
  );
}

export default App;
