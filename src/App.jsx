import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { store } from '@/store/store';
import { Provider } from 'react-redux';
import { routes } from '@/routes';

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            {
              routes?.map((route, index) => {
                return <Route key={index} path={route.path} element={<route.component />} />
              })
            }
          </Routes>
        </Router>
      </Provider>
    </>
  )
};

export default App;
