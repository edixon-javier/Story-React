import { useContext } from "react";
import Layout from "../../components/Layout/Layout";
import { ShoppingCartContext } from "../../Context/Context";
import { OrderCard } from "../../components/OrderCard/OrderCard";

function MyOrder() {
  const {order} = useContext(ShoppingCartContext);
  console.log(order);
  return (
    <Layout>
      My Order
      <div className="flex flex-col w-80">
        {order?.slice(-1)[0].product.map((item) => (
          <OrderCard
            id={item.id}
            title={item.title}
            imageUrl={item.images}
            price={item.price}
            key={item.id}
          />
        ))}
      </div>
    </Layout>
  );
}

export default MyOrder;
