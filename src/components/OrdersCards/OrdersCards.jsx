import { ChevronRightIcon } from "@heroicons/react/24/solid";

const OrdersCards = (props) => {
  const { totalPrice, totalProducts } = props;
  const date = new Date().toLocaleDateString();
  
  return (
    <div className="flex justify-between items-center mb-3 border border-black w-80 p-4 rounded-lg">
      <p className="text-sm  flex justify-between w-60 items-center">
        <div className="flex flex-col">
          <span>Date: {date}</span>
          <span>Cant: {totalProducts}</span>
        </div>
        <span className="text-lg font-medium">${totalPrice}</span>
      </p>
      <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer font-medium" />
    </div>
  );
};

export { OrdersCards };
``;
