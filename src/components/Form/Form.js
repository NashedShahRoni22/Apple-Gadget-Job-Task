import Link from "next/link";
import { useSelector } from "react-redux";

const Form = () => {
  const state = useSelector((state) => state.totalPrice);
  return (
    <div className="bg-white text-black my-5 p-4 rounded-xl lg:w-1/2 border shadow-xl">
      <p className="text-2xl font-semibold mb-5">Your Cart</p>
      <hr />

      <div className="flex justify-between my-2">
        <p>Total Price</p>
        <p>{state} BDT</p>
      </div>
      <div className="flex justify-between my-2">
        <p>Delivery Charges</p>
        <p className="text-blue-600">(will be added)</p>
      </div>
      <hr />
      <div className="flex justify-between my-2">
        <p>Total Charges</p>
        <p className="text-orange-600 font-semibold">{state} BDT</p>
      </div>
      <div className="text-center">
        <Link
          href={"/CheckoutForm/CheckoutForm"}
          className="btn bg-orange-600 border-0 text-white"
        >
          Check Out
        </Link>
      </div>
    </div>
  );
};

export default Form;
