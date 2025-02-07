import styled from 'styled-components';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Purchases from './pages/Purchases';
import Account from './pages/Account';
import Inventory from './pages/Inventory';
import Login from './pages/Login';
import Users from './pages/Users';
import PageNotFound from './pages/PageNotFound';
import GlobalStyles from './styles/GlobalStyles';
import AppLayout from './ui/AppLayout';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="purchases" element={<Purchases />} />
            <Route path="account" element={<Account />} />
            <Route path="inventory" element={<Inventory />} />
            <Route path="users" element={<Users />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
