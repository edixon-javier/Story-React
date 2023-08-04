import { useContext } from "react";
import Layout from "../../components/Layout/Layout";
import { ShoppingCartContext } from "../../Context/Context";
import { OrderCard } from "../../components/OrderCard/OrderCard";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

function MyOrder() {
  const {order} = useContext(ShoppingCartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  if(index === "last") index = order?.lenght - 1;
  
  return (
    <Layout>
      <div className="flex w-80 items-center relative justify-center mb-6">
        <Link to={"/MyOrders"} className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 text-black cursor-pointer" />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="flex flex-col w-80">
        {order?.[index]?.product.map((item) => (
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
