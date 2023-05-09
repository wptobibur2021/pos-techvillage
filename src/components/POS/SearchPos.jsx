import { AiOutlineFullscreen, AiOutlineSearch } from "react-icons/ai";

const SearchPos = () => {
  return (
    <div>
      <div className="flex justify-between gap-3 items-center p-1 md:p-3 shadow">
        <AiOutlineSearch className="text-2xl" />
        <input
          placeholder="Search Product..."
          className="w-full border-0 p-1 focus:outline-0"
        />
        <AiOutlineFullscreen className="text-xl cursor-pointer" />
      </div>
    </div>
  );
};

export default SearchPos;
