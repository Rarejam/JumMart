import App from "./App";

import Account from "./Account/Account";
import Cart from "./Cart/Cart";
import Categories from "./Categories/Categories";
import Market from "./Market/Market";
import WishList from "./Wishlist/WishList";
import Home from "./Home/Home";
import Content from "./Categories/Content";
import ProductCard from "./product/Product";

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
        path: "wishlist",
        element: <WishList />,
      },
      {
        path: "account",
        element: <Account />,
      },
    ],
  },
];

export default routes;
