import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./cakeSlice";
import { useState } from "react";

const CakeView = () => {
  const [value, setValue] = useState(1);
  const noOfCakes = useSelector((state) => state.cake.noOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cakes - {noOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <input
        type="number"
        min="1"
        value={value}
        onChange={(e) => {
          setValue(parseInt(e.target.value));
        }}
      />
      <button onClick={() => dispatch(restocked(value))}>Restock Cakes</button>
    </div>
  );
};

export default CakeView;
