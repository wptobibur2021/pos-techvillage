import {
  AiFillDelete,
  AiFillEdit,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";

const TablePos = () => {
  return (
    <div className="my-5">
      <div className="flex mb-2 justify-between text-gray-500 items-center">
        <div>
          <AiFillEdit className="text-xl cursor-pointer" />
        </div>
        <div className="flex w-full items-center justify-between border p-2">
          <div className="">
            <h2>Pure White & blue sleeve</h2>
          </div>
          <p>$455.00</p>
          <div className="flex gap-2 justify-between items-center">
            <AiFillMinusCircle className="text-xl cursor-pointer" />
            <p>2</p>
            <AiFillPlusCircle className="text-xl cursor-pointer" />
          </div>
          <p>$455.00</p>
        </div>
        <div>
          <AiFillDelete className="text-xl text-red-800 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default TablePos;
