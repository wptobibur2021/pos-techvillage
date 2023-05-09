import {
  AiFillPlusCircle,
  AiOutlineFieldTime,
  AiOutlinePlusCircle,
  AiOutlineUser,
} from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { SlNote } from "react-icons/sl";

const MenuPos = () => {
  return (
    <div>
      <div className="flex gap-3 mb-5 items-center justify-between">
        <div className="cursor-pointer">
          <MdMenu className=" text-2xl" />
        </div>
        <div className="flex gap-3 items-center cursor-pointer bg-button-bg text-blue-800 py-1 px-5 rounded">
          <SlNote />
          <p>Note</p>
        </div>
        <div className="flex gap-3 items-center cursor-pointer bg-button-bg text-blue-800 py-1 px-3 rounded">
          <FaShippingFast />
          <p>Shipping</p>
        </div>
        <div className="flex gap-3 items-center cursor-pointer bg-button-bg text-blue-800 py-1 px-3 rounded">
          <AiOutlineFieldTime />
          <p>Hold Orders</p>
        </div>
        <div className="flex gap-3 items-center cursor-pointer bg-button-bg text-blue-800 py-1 px-3 rounded">
          <AiFillPlusCircle />
          <p>New Item</p>
        </div>
      </div>
      <div className="flex items-center justify-between rounded p-3 bg-button-bg text-blue-800">
        <div className="flex gap-2 text-base font-medium items-center">
          <AiOutlineUser />
          <p>Tobibur Rohman</p>
        </div>
        <div className=" cursor-pointer">
          <AiOutlinePlusCircle className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default MenuPos;
