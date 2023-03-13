import ClientPage from './components/ClientPage';
import InvoiceHome from './components/Invoice/InvoiceHome';
import DashboardLayout from './components/Layout/DashboardLayout';
import Payment from './components/Payment';
import Products from './components/Products/ProductList';
import ExpenseReport from './components/Report/ExpenseReport';
import SaleReport from './components/Report/SaleReport';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const sidebarItems = [
  { address: '', element: <Dashboard /> },
  { title: 'Invoice', address: 'invoice', element: <InvoiceHome /> },
  { title: 'Clients', address: 'clients', element: <ClientPage /> },
  { title: 'Products', address: 'products', element: <Products /> },
  { title: 'Payment', address: 'payments', element: <Payment /> },
  { title: 'Expense Report', address: 'expenses', element: <ExpenseReport /> },
  { title: 'Sale Report', address: 'sales', element: <SaleReport /> },
  { title: 'Sign in', address: 'signin', element: <SignIn /> },
  { title: 'Sign up', address: 'signup', element: <SignUp /> },
];

const App = () => {
  return (
    <>
      <DashboardLayout sidebarItems={sidebarItems} />
    </>
  );
};

export default App;
