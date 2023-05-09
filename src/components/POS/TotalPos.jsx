import { useSelector } from "react-redux";

const TotalPos = () => {
  const { total, cartQty } = useSelector((state) => state.carts);
  return (
    <div className="flex items-center justify-between rounded p-3 bg-button-bg text-blue-800">
      <div className="">
        <p>Product Count ({cartQty})</p>
      </div>
      <div className="flex items-center gap-5 md:gap-20 md:text-3xl font-semibold">
        <h2>Total</h2>
        <h2>{total + 200} ৳</h2>
      </div>
    </div>
  );
};

export default TotalPos;
