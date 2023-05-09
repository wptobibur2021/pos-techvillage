import {
  AiFillDelete,
  AiFillEdit,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import {
  cartDecrement,
  cartIncrement,
  removeCart,
} from "../../features/cart/cartSlice";

const TablePos = () => {
  const { carts } = useSelector((state) => state.carts);
  const dispatch = useDispatch();
  return (
    <div className="my-5">
      {carts.map((cart) => (
        <div
          key={cart.id}
          className="flex mb-2 gap-1 md:gap-0 justify-between text-gray-500 items-center"
        >
          <div>
            <AiFillEdit className="text-lg md:text-xl cursor-pointer" />
          </div>
          <div className="flex w-full items-center justify-between border p-2">
            <div>
              <h2 className="text-sm md:text-base">
                {cart.model.slice(0, 15)}...
              </h2>
            </div>
            <p className="text-xs md:text-base">{cart.price} ৳</p>
            <div className="flex gap-2 justify-between items-center">
              <AiFillMinusCircle
                onClick={() => dispatch(cartDecrement(cart))}
                className="text-base md:text-xl cursor-pointer"
              />
              <p className="text-xs md:text-base">{cart.proQty}</p>
              <AiFillPlusCircle
                onClick={() => dispatch(cartIncrement(cart))}
                className="text-base md:text-xl cursor-pointer"
              />
            </div>
            <p className="text-xs md:text-base">{cart.price * cart.proQty} ৳</p>
          </div>
          <div className="cursor-pointer">
            <AiFillDelete
              onClick={() => dispatch(removeCart(cart))}
              className="text-base md:text-xl text-red-800"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TablePos;
