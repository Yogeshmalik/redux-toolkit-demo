import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./icecrreamSlice";

const IcecreamView = () => {
  const noOfIcecream = useSelector((state) => state.icecream.noOfIcecream);
  const dispatch = useDispatch();
  const [value, setValue] = useState(1);

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-icon ice">🍦</div>
        <div className="card-header-text">
          <h3>Ice Cream Management</h3>
          <p>Order and restock ice cream</p>
        </div>
      </div>

      <div className="stock-display ice">
        <div className="stock-label">Available Ice Cream</div>
        <div className="stock-value ice">{noOfIcecream}</div>
      </div>

      <div className="controls controls-full">
        <button onClick={() => dispatch(ordered())} className="btn btn-order">
          🛒 Order Ice Cream
        </button>

        <div className="control-group">
          <input
            type="number"
            min={1}
            value={value}
            onChange={(e) => {
              setValue(parseInt(e.target.value));
            }}
            className="input-field"
            placeholder="Qty"
          />
          <button
            onClick={() => dispatch(restocked(value))}
            className="btn btn-restock"
          >
            ❄️ Restock
          </button>
        </div>
      </div>

      <div className="tip">
        💡 Click "Order Ice Cream" to sell from inventory, use "Restock" to add
        new stock
      </div>
    </div>
  );
};

export default IcecreamView;
