import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

const CakeView = () => {
  const noOfCakes = useSelector((state) => state.cake.noOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cakes - {noOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <button onClick={() => dispatch(restocked(5))}>Restock Cakes</button>
    </div>
  );
};

export default CakeView;
