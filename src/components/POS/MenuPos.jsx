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
      <div className="flex gap-1 md:gap-3 mb-5 items-center justify-between">
        <div className="cursor-pointer">
          <MdMenu className="text-2xl" />
        </div>
        <div className="flex text-lg gap-1 md:gap-3 items-center cursor-pointer bg-button-bg text-blue-800 py-2 px-3 md:py-1 md:px-5 rounded">
          <SlNote />
          <p className="hidden md:block">Note</p>
        </div>
        <div className="flex text-lg gap-1 md:gap-3 items-center cursor-pointer bg-button-bg text-blue-800 py-2 px-3 md:py-1 md:px-3 rounded">
          <FaShippingFast />
          <p className="hidden md:block">Shipping</p>
        </div>
        <div className="flex text-lg gap-1 md:gap-3 items-center cursor-pointer bg-button-bg text-blue-800 py-2 px-3 md:py-1 md:px-3 rounded">
          <AiOutlineFieldTime />
          <p className="hidden md:block">Hold Orders</p>
        </div>
        <div className="flex text-lg gap-1 md:gap-3 items-center cursor-pointer bg-button-bg text-blue-800 py-2 px-3 md:py-1 md:px-3 rounded">
          <AiFillPlusCircle />
          <p className="hidden md:block">New Item</p>
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
