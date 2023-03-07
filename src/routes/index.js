import Home from "@/pages/Home";
import Dashboard from "@/pages/Dashboard";
import Error from "@/pages/Error";


export const routes = [
  {
    path: '/',
    isProtected: false,
    component: Home,
  },
  {
    path: '/dashboard',
    isProtected: true,
    component: Dashboard,
  },
  // {
  //   path: '/auth/login',
  //   isProtected: false,
  //   component: SignIn,
  // },
  // {
  //   path: '/auth/register',
  //   isProtected: false,
  //   component: SignUp,
  // },
  {
    path: '*',
    isProtected: false,
    component: Error,
  },
];
