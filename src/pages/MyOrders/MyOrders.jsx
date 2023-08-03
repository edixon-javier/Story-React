import Layout from "../../components/Layout/Layout";
import { OrdersCards } from "../../components/OrdersCards/OrdersCards";
import { useContext } from "react";
import { ShoppingCartContext } from "../../Context/Context";



function MyOrders() {
  const {order} = useContext(ShoppingCartContext);
  return (
    <Layout>
      MyOrder
      {
        order.map(()=> {
           <OrdersCards
             totalPrice={order.totalPrice}
             totalProducts={order.totalProducts}
           />;
        })
      }
    </Layout>
  );
}

export default MyOrders;
