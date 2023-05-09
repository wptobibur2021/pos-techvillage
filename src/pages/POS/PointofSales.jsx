import TablePos from "../../components/POS/TablePos";
import MenuPos from "../../components/POS/MenuPos";
import SummeryPos from "../../components/POS/SummeryPos";
import TotalPos from "../../components/POS/TotalPos";
import ButtonPos from "../../components/POS/ButtonPos";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchPos from "../../components/POS/SearchPos";
import CatPos from "../../components/POS/CatPos";
import ProductPos from "../../components/POS/ProductPos";
import { useSelector } from "react-redux";
const PointofSales = () => {
  const [products, setProducts] = useState();
  const { carts } = useSelector((state) => state.carts);
  // Product Load from API
  useEffect(() => {
    axios
      .get("https://api.jsonbin.io/v3/b/63c1064e01a72b59f249a0d1")
      .then((res) => {
        setProducts(res.data.record);
      });
  }, []);

  return (
    <div>
      <div className="container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-3">
            <MenuPos />
            {carts.length > 0 ? (
              <>
                <TablePos />
                <SummeryPos />
                <TotalPos />
                <ButtonPos />
              </>
            ) : (
              <div className="my-5">
                <h2>Please add product</h2>
              </div>
            )}
          </div>
          <div className="border-l p-3 md:p-0 text-gray-500">
            <SearchPos />
            <div className="p-3">
              <CatPos />
              <ProductPos products={products} />
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 bg-button-bg text-blue-800">
        <p className="text-center">
          Design & development by{" "}
          <a href="https://tobibur.me" target="_blank">
            Tobibur
          </a>
        </p>
      </div>
    </div>
  );
};

export default PointofSales;
