import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./cakeSlice";
import { useState } from "react";

const CakeView = () => {
  const [value, setValue] = useState(1);
  const noOfCakes = useSelector((state) => state.cake.noOfCakes);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-icon">🍰</div>
        <div className="card-header-text">
          <h3>Cake Management</h3>
          <p>Order and restock cakes</p>
        </div>
      </div>

      <div className="stock-display">
        <div className="stock-label">Available Cakes</div>
        <div className="stock-value">{noOfCakes}</div>
      </div>

      <div className="controls controls-full">
        <button onClick={() => dispatch(ordered())} className="btn btn-order">
          📦 Order Cake
        </button>

        <div className="control-group">
          <input
            type="number"
            min="1"
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
            ➕ Restock
          </button>
        </div>
      </div>
    </div>
  );
};

export default CakeView;
