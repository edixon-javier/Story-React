import { useContext } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../Context/Context";
import "./CheckoutSideMenu.css";
import { OrderCard } from "../OrderCard/OrderCard";
import { totalPrice } from "../../utils/utils";
import { Link } from "react-router-dom";
function CheckoutSideMenu() {
  const {
    isCheckoutOpen,
    closeCheckoutDetail,
    cartProducts,
    setCartProducts,
    order,
    setOrder,
    setsearchByTitle
  } = useContext(ShoppingCartContext);

  const handleDelete = (id) => {
    const filteredProducts = cartProducts.filter(product => product.id !== id)
    setCartProducts(filteredProducts);
  }

  const handledCheckout = () => {
    const orderToAdd = {
      date: '0.1.02.2023',
      product: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts)
    }
    setOrder([...order, orderToAdd]);
    setCartProducts([]);
    closeCheckoutDetail()
    setsearchByTitle(null)
  }

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
      <div className="px-6 overflow-y-scroll flex-1">
        {cartProducts?.map((item) => (
          <OrderCard
            id={item.id}
            title={item.title}
            imageUrl={item.images}
            price={item.price}
            key={item.id}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-6 mb-6">
        <p className="flex justify-between items-center mb-2">
          <span className="font-light">Total</span>
          <span className="font-medium text-1xl">
            ${totalPrice(cartProducts)}
          </span>
        </p>
        <Link to="/MyOrders">
          <button
            className="w-full bg-black py-3 text-white rounded-md"
            onClick={() => handledCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
}

export { CheckoutSideMenu };
