import { AiFillCloseCircle, AiFillPayCircle } from "react-icons/ai";
import { FaDollarSign, FaHandHolding } from "react-icons/fa";
import { resetCart } from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";

const ButtonPos = () => {
  const dispatch = useDispatch();
  return (
    <div className="mt-5">
      <div className="md:flex grid grid-cols-2 gap-3 items-center justify-between">
        <div
          onClick={() => dispatch(resetCart())}
          className="flex gap-2 cursor-pointer text-lg md:text-2xl justify-center items-center bg-red-200 text-red-700 py-1 px-5 rounded"
        >
          <AiFillCloseCircle />
          <p>Cancel</p>
        </div>
        <div className="flex gap-2 cursor-pointer text-lg justify-center md:text-2xl items-center bg-button-bg text-blue-800 py-1 px-5 rounded">
          <FaHandHolding />
          <p>Hold</p>
        </div>
        <div className="flex gap-2 cursor-pointer text-lg justify-center md:text-2xl items-center bg-button-bg text-blue-800 py-1 px-3 rounded">
          <FaDollarSign />
          <p>Discount</p>
        </div>
        <div className="flex gap-2 cursor-pointer text-lg justify-center md:text-2xl items-center bg-button-bg text-blue-800 py-1 px-3 rounded">
          <AiFillPayCircle />
          <p>Pay Now</p>
        </div>
      </div>
    </div>
  );
};

export default ButtonPos;
