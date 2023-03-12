import Dashboard from './pages/Dashboard';
import SignUp from './pages/SignUp';
import AddInvoice from './pages/AddInvoice/Index';
import { useState } from 'react';
import ClientPage from './components/ClientPage/index';
import Payment from './components/Payment/index';
import ProductHome from './components/Products/ProductList/index';
import InvoiceBreadcrumbs from './components/shared/Breadcrumbs/index'
import InvoiceHome from './components/Invoice/InvoiceHome/index';
import InvoiceStatusCard from './components/Invoice/InvoiceStatusCard'

const App = () => {

  return (
    <>
    {/* <InvoiceHome></InvoiceHome> */}
    {/* <InvoiceStatusCard></InvoiceStatusCard> */}
    {/* <ProductHome></ProductHome> */}
    {/* <ClientPage></ClientPage> */}
    {/* <Payment></Payment> */}
    {/* <AddInvoice></AddInvoice> */}
   {/* <SignUp ></SignUp> */}
    <Dashboard></Dashboard>
    {/* <InvoiceBreadcrumbs /> */}
    </>
  )
};

export default App;
