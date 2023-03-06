import { useState } from 'react';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <h1>from App</h1>

      {!isLogin && <Home />}
      {isLogin && <Dashboard />}
    </>
  )
};

export default App;
