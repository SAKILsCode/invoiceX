import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ClientPage from '../../components/ClientPage';
import Payment from '../../components/Payment';
import ProductHome from '../../components/Products/ProductList';
import ExpenseReport from '../../components/Report/ExpenseReport';
import SaleReport from '../../components/Report/SaleReport';
import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';

import CustomDrawer from '../../components/Layout/Drawer';
import Navbar from '../../components/Layout/Navbar';

const Dashboard = () => {
  const sideBarData = [
    'Invoice',
    'Add Invoice',
    'Invoice Details',
    'Add Product',
    'Product List',
    'Payment',
    'Sign In',
    'Sing Up',
    'Report',
  ];
  const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

  const [isDrawerOpen, setIsDrawerOpen] = useState(true);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <Navbar
        menuList={settings}
        isDrawerOpen={isDrawerOpen}
        onDrawerOpen={handleDrawerOpen}
      />

      <Box sx={{ display: 'flex' }}>
        <CssBaseline />

        <CustomDrawer
          drawerItems={sideBarData}
          isDrawerOpen={isDrawerOpen}
          onDrawerClose={handleDrawerClose}
        />

        <Box component='main' sx={{ flexGrow: 1, pt: 8 }}>
          <Routes>
            <Route path='/productHome' element={<ProductHome />} />
            <Route path='/clientPage' element={<ClientPage />} />
            <Route path='/paymentPage' element={<Payment />} />
            <Route path='/singUpPage' element={<SignUp />} />
            <Route path='/singInPage' element={<SignIn />} />
            <Route path='/expensiveReport' element={<ExpenseReport />} />
            <Route path='/saleReport' element={<SaleReport />} />
          </Routes>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
