import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context/Context";
import "./CheckoutSideMenu.css";
function CheckoutSideMenu() {
  const {
    isCheckoutOpen,
    closeCheckoutDetail,
  } = useContext(ShoppingCartContext);

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
      <figure className="px-6">
        <img
          className="w-full h-2/3 rounded-lg"
          //   src={productToShow.images}
          //   alt={productToShow.title}
        />
        <p className="flex flex-col p-6">
          <span className="font-medium text-2xl mb-2">
            {/* {productToShow.price} */}
          </span>
          {/* <span className="font-medium text-md">{productToShow.title}</span> */}
          <span className="font-medium text-sm">
            {/* {productToShow.description} */}
          </span>
        </p>
      </figure>
    </aside>
  );
}

export { CheckoutSideMenu };
