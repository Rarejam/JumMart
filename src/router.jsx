import App from "./App";

import Account from "./Account/Account";
import Cart from "./Cart/Cart";
import Categories from "./Categories/Categories";
import Market from "./Market/Market";
import WishList from "./Wishlist/WishList";
import Home from "./Home/Home";
import Content from "./Categories/Content";
import ProductCard from "./product/Product";
import HelpSupport from "./Account/HelpSupport";
import Orders from "./Account/Orders";
import Payment from "./Account/Payment";
import Inbox from "./Account/Inbox";
import AdminLogin from "./Account/AdminLogin";
import AdminDashboard from "./Account/AdminDashboard";
import Checkout from "./Cart/Checkout";
import About from "./Account/About";

const routes = [
  {
    index: true,
    element: <App />,
  },
  {
    path: "/market",
    element: <Market />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "product/:id",
        element: <ProductCard />,
      },

      {
        path: "categories",
        element: <Categories />,
        children: [
          {
            index: true,
            element: <Content title="Fashion Deals" category="fashion" />,
          },
          {
            path: "grocery",
            element: <Content title="Grocery" category="grocery" />,
          },
          {
            path: "gaming",
            element: <Content title="Gaming" category="gaming" />,
          },
          {
            path: "health",
            element: <Content title="Health and Beauty" category="health" />,
          },
          {
            path: "baby-products",
            element: <Content title="Baby Products" category="baby" />,
          },

          {
            path: "Electronics",
            element: <Content title="Electronics" category="electronics" />,
          },
          {
            path: "phones",
            element: <Content title="phones and tablets" category="phones" />,
          },
        ],
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "wishlist",
        element: <WishList />,
      },
      {
        path: "account",
        element: <Account />,
        children: [
          {
            index: true,
            element: <Orders />,
          },
          {
            path: "support",
            element: <HelpSupport />,
          },
          {
            path: "payments",
            element: <Payment />,
          },
          {
            path: "inbox",
            element: <Inbox />,
          },
          {
            path: "about",
            element: <About />,
          },
          {
            path: "admin",
            element: <AdminLogin />,
          },
          {
            path: "admin/dashboard",
            element: <AdminDashboard />,
          },
        ],
      },
    ],
  },
];

export default routes;
