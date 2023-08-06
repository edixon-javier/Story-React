import { useRoutes, BrowserRouter } from "react-router-dom";
import "../../App.css";
import Home from "../Home/Home.jsx";
import MyAccount from "../MyAccount/MyAccount.jsx";
import MyOrder from "../MyOrder/MyOrder.jsx";
import MyOrders from "../MyOrders/MyOrders.jsx";
import NotFound from "../NotFound/NotFound.jsx";
import SignIn from "../SignIn/SignIn.jsx";
import NavBar from "../../components/NavBar/NavBar";
import { ShoppingCartProvider } from "../../Context/Context";
import { CheckoutSideMenu } from "../../components/CheckoutSideMenu/CheckoutSideMenu";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/All", element: <Home /> },
    { path: "/Clothes", element: <Home /> },
    { path: "/Electronics", element: <Home /> },
    { path: "/Furnitures", element: <Home /> },
    { path: "/Others", element: <Home /> },
    { path: "/MyAccount", element: <MyAccount /> },
    { path: "/MyOrder/last", element: <MyOrder /> },
    { path: "/MyOrders/:id", element: <MyOrder /> },
    { path: "/MyOrders", element: <MyOrders /> },
    { path: "/SignIn", element: <SignIn /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <NavBar />
        <CheckoutSideMenu/>
        <AppRoutes />
      </BrowserRouter>
    </ShoppingCartProvider>
  );
};

export default App;
