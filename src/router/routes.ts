import Catalog from "../pages/Catalog";
import Home from "../pages/Home";
import HowBuy from "../pages/HowBuy";
import Login from "../pages/Login";
import Register from "../pages/Register";

export const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/catalog',
    component: Catalog,
  },
  {
    path: '/how-buy',
    component: HowBuy,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/register',
    component: Register,
  },
];
export const privateRoutes = [];