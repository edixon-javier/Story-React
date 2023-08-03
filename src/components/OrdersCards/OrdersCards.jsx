import { XMarkIcon } from "@heroicons/react/24/solid";

const OrdersCards = (props) => {
  const {totalPrice, totalProducts } = props;
  return (
    <div className="flex justify-between items-center mb-3 border border-black">
      <p className="text-sm font-light">
        <span>0102203</span>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
      </p>
    </div>
  );
};

export { OrdersCards };
