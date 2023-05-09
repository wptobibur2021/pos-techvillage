import { useDispatch } from "react-redux";
import { addCart } from "../../features/cart/cartSlice";

const ProductPos = ({ products }) => {
  const dispatch = useDispatch();
  console.log("products", products);
  return (
    <div className="my-5">
      <div className="grid gap-3 grid-cols-2 md:grid-cols-5">
        {products?.map((product) => (
          <div
            key={product.id}
            className="border cursor-pointer text-center rounded"
            onClick={() => dispatch(addCart({ ...product, proQty: 1 }))}
          >
            <div className="relative">
              <img src={product.image} />
            </div>
            <div>
              <p className="bg-gray-300 p-1 opacity-70 text-slate-800">
                {product.price} ৳
              </p>
              <p>{product.model.slice(0, 5)}...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPos;
