import { useSelector } from "react-redux";

const SummeryPos = () => {
  const { total } = useSelector((state) => state.carts);
  return (
    <div className="md:w-full md:float-right mb-5">
      <div className="md:w-5/12 md:float-right">
        <ul>
          <li className="flex border-t text-sm md:text-lg py-2 justify-between items-center">
            <p>Sub Total</p>
            <p>{total} ৳</p>
          </li>
          <li className="flex border-t text-sm md:text-lg py-2 justify-between items-center">
            <p>TAX</p>
            <p>150 ৳</p>
          </li>
          <li className="flex border-t text-sm md:text-lg py-2 justify-between items-center">
            <p>Shipping</p>
            <p>200 ৳</p>
          </li>
          <li className="flex border-t text-sm md:text-lg py-2 justify-between items-center">
            <p className="text-blue-800 font-medium">Discount on cart</p>
            <p>150 ৳</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SummeryPos;
