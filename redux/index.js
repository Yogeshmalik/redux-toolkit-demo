const redux = require("redux");
const produce = require("immer").produce;
const createStore = redux.createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";
const ICECREAM_ORDERED = "ICECREAM_ORDERED";
const ICECREAM_RESTOCKED = "ICECREAM_RESTOCKED";

const orderCake = () => {
  return {
    type: CAKE_ORDERED,
    payload: 1,
  };
};

const restockCake = (qty = 1) => {
  return {
    type: CAKE_RESTOCKED,
    payload: qty,
  };
};

const orderIceCream = () => {
  return {
    type: ICECREAM_ORDERED,
    payload: 1,
  };
};

const restockIceCream = (qty = 1) => {
  return {
    type: ICECREAM_RESTOCKED,
    payload: qty,
  };
};

const initialCakeState = {
  noOfCakes: 10,
};

const initialIceCreamState = {
  noOfIceCreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      //   return {
      //     ...state,
      //     noOfCakes: state.noOfCakes - 1,
      //   };
      return produce(state, (draft) => {
        draft.noOfCakes = state.noOfCakes - 1;
      });
    case CAKE_RESTOCKED: {
      return {
        ...state,
        noOfCakes: state.noOfCakes + action.payload,
      };
    }
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case ICECREAM_ORDERED:
      return {
        ...state,
        noOfIceCreams: state.noOfIceCreams - 1,
      };
    case ICECREAM_RESTOCKED: {
      return {
        ...state,
        noOfIceCreams: state.noOfIceCreams + action.payload,
      };
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log("initial state: ", store.getState());
const unsubscribe = store.subscribe(() =>{}
);

const actions = bindActionCreators(
  { orderCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch,
);

// store.dispatch(orderCake());
// store.dispatch(orderCake());
// store.dispatch(restockCake(2));
// store.dispatch(orderIceCream());
// store.dispatch(orderIceCream());
// store.dispatch(restockIceCream(2));

actions.orderCake();
actions.orderCake();
actions.restockCake(2);
actions.orderIceCream();
actions.orderIceCream();
actions.orderIceCream();
actions.restockIceCream(3);
unsubscribe();













