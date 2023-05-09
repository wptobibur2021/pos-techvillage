import { CiMenuKebab } from "react-icons/ci";

const CatPos = () => {
  return (
    <div className="md:flex grid grid-cols-3 gap-2 justify-between items-center">
      <button className="px-2 text-base md:text-lg md:px-3 text-blue-800 py-1 text-center border rounded-sm">
        All Category
      </button>
      <button className="px-2 text-base md:text-lg md:px-3 py-1 text-center border rounded-sm">
        Electronics
      </button>
      <button className="px-2 text-base md:text-lg md:px-3 py-1 text-center border rounded-sm">
        Lifestyle
      </button>
      <button className="px-2 text-base md:text-lg md:px-3 py-1 text-center border rounded-sm">
        Men
      </button>
      <button className="px-2 text-base md:text-lg md:px-3 py-1 text-center border rounded-sm">
        Women
      </button>
      <button className="px-2 text-base md:text-lg md:px-3 py-1 text-center border rounded-sm">
        Kind
      </button>
      <button className="hidden md:block">
        <CiMenuKebab />
      </button>
    </div>
  );
};

export default CatPos;
