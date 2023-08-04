import Layout from "../../components/Layout/Layout";
import { OrdersCards } from "../../components/OrdersCards/OrdersCards";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/Context";
import { Link } from "react-router-dom";

function MyOrders() {
  const { order } = useContext(ShoppingCartContext);
  return (
    <Layout>
      <div className="flex w-80 items-center relative justify-center mb-6">
        <h1>My Orders</h1>
      </div>
      {order.map((order, index) => (
        <Link to={`/MyOrders/${index}`} key={index} className="">
          <OrdersCards
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      ))}
    </Layout>
  );
}

export default MyOrders;
