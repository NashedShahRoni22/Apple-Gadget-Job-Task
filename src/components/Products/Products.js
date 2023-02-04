import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";

const Products = () => {
  const state = useSelector((state)=> state.products)
  return (
    <div className="p-4 rounded-xl bg-white lg:w-1/2 shadow-xl border">
      <h1 className="text-2xl font-semibold text-black">Products</h1>
      {
        state.map((p,i)=> <ProductCard p={p} key={i}></ProductCard> )
      }
    </div>
  );
};
export default Products;
