import { useRoutes, BrowserRouter } from "react-router-dom";
import "../../App.css";
import Home from "../Home/Home.jsx";
import MyAccount from "../MyAccount/MyAccount.jsx";
import MyOrder from "../MyOrder/MyOrder.jsx";
import MyOrders from "../MyOrders/MyOrders.jsx";
import NotFound from "../NotFound/NotFound.jsx";
import SignIn from "../SignIn/SignIn.jsx";
import NavBar from "../../components/NavBar/NavBar";

const AppRoutes= () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/MyAccount", element: <MyAccount /> },
    { path: "/MyOrder", element: <MyOrder /> },
    { path: "/MyOrders", element: <MyOrders /> },
    { path: "/SignIn", element: <SignIn /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes;
}

const  App = () => {
  return (
    <BrowserRouter>
    <NavBar/>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
