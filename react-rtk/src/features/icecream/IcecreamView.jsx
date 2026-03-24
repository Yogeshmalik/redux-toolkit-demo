import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./icecrreamSlice";

const IcecreamView = () => {
  const noOfIcecream = useSelector((state) => state.icecream.noOfIcecream);
  const dispatch = useDispatch()
  const [value, setValue] = useState(1);
  return (
    <div>
      <h2>Number of Ice Cream - {noOfIcecream}</h2>
      <button onClick={()=>dispatch(ordered())}>Order Ice Cream</button>
      <input
        type="number"
        min={1}
        value={value}
        onChange={(e) => {
          setValue(parseInt(e.target.value));
        }}
      />
      <button onClick={() =>dispatch(restocked(value))}>Restock Ice Cream</button>
    </div>
  );
};

export default IcecreamView;
