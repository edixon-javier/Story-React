import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context/Context";
import "./CheckoutSideMenu.css";
import { OrderCard } from "../OrderCard/OrderCard";
function CheckoutSideMenu() {
  const { isCheckoutOpen, closeCheckoutDetail, cartProducts } =
    useContext(ShoppingCartContext);

  return (
    <aside
      className={`${
        isCheckoutOpen ? "flex" : "hidden"
      } product-detail  flex-col fixed right-0 border border-black rounded-lg  bg-white`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-xl">Detail</h2>
        <div>
          <XMarkIcon
            className="h-6 w-6 text-black cursor-pointer"
            onClick={() => closeCheckoutDetail()}
          />
        </div>
      </div>
      <div className="px-6 overflow-y-scroll">
        {
        cartProducts?.map((item) => 
         ( <OrderCard
            title={item.title}
            imageUrl={item.images}
            price={item.price}
            key={item.id}
          />)
        )
        }
      </div>
    </aside>
  );
}

export { CheckoutSideMenu };
