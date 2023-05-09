import TablePos from "../../components/POS/TablePos";
import MenuPos from "../../components/POS/MenuPos";
import SummeryPos from "../../components/POS/SummeryPos";
import TotalPos from "../../components/POS/TotalPos";
import ButtonPos from "../../components/POS/ButtonPos";
import { AiOutlineFullscreen, AiOutlineSearch } from "react-icons/ai";
import { CiMenuKebab } from "react-icons/ci";
import img1 from "../../assets/images/pro_01.jpg";
const PointofSales = () => {
  return (
    <div>
      <div className="container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-3">
            <MenuPos />
            <TablePos />
            <SummeryPos />
            <TotalPos />
            <ButtonPos />
          </div>
          <div className="border-l text-gray-500">
            <div>
              <div className="flex justify-between gap-3 items-center p-3 shadow">
                <AiOutlineSearch className="text-2xl" />
                <input
                  placeholder="Search Product..."
                  className="w-full border-0 p-1 focus:outline-0"
                />
                <AiOutlineFullscreen className="text-xl cursor-pointer" />
              </div>
            </div>
            <div className="p-3">
              <div className="flex gap-2 justify-between items-center">
                <button className="px-3 text-blue-800 py-1 text-center border rounded-sm">
                  All Category
                </button>
                <button className="px-3 py-1 text-center border rounded-sm">
                  Electronics
                </button>
                <button className="px-3 py-1 text-center border rounded-sm">
                  Lifestyle
                </button>
                <button className="px-3 py-1 text-center border rounded-sm">
                  Men
                </button>
                <button className="px-3 py-1 text-center border rounded-sm">
                  Women
                </button>
                <button className="px-3 py-1 text-center border rounded-sm">
                  Kind
                </button>
                <button>
                  <CiMenuKebab />
                </button>
              </div>
              <div className="my-5">
                <div className="grid gap-3 grid-cols-2 md:grid-cols-5">
                  <div className="border text-center rounded">
                    <div className="relative">
                      <img src={img1} />
                    </div>
                    <div>
                      <p className="bg-gray-300 p-1 opacity-70 text-slate-800">
                        $40.00
                      </p>
                      <p>Name</p>
                    </div>
                  </div>
                  <div className="border text-center rounded">
                    <div className="relative">
                      <img src={img1} />
                    </div>
                    <div>
                      <p className="bg-gray-300 p-1 opacity-70 text-slate-800">
                        $40.00
                      </p>
                      <p>Name</p>
                    </div>
                  </div>
                  <div className="border text-center rounded">
                    <div className="relative">
                      <img src={img1} />
                    </div>
                    <div>
                      <p className="bg-gray-300 p-1 opacity-70 text-slate-800">
                        $40.00
                      </p>
                      <p>Name</p>
                    </div>
                  </div>
                  <div className="border text-center rounded">
                    <div className="relative">
                      <img src={img1} />
                    </div>
                    <div>
                      <p className="bg-gray-300 p-1 opacity-70 text-slate-800">
                        $40.00
                      </p>
                      <p>Name</p>
                    </div>
                  </div>
                  <div className="border text-center rounded">
                    <div className="relative">
                      <img src={img1} />
                    </div>
                    <div>
                      <p className="bg-gray-300 p-1 opacity-70 text-slate-800">
                        $40.00
                      </p>
                      <p>Name</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointofSales;
