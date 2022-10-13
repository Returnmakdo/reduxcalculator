const PLUS = "PLUS";
const MINUS = "MINUS";
const MULTIPLE = "MULTIPLE";
const DIVIDE = "DIVIDE";

export const plus = (payload) => {
  return {
    type: PLUS,
    payload,
  };
};

export const minus = (payload) => {
  return {
    type: MINUS,
    payload,
  };
};

export const multiple = (payload) => {
  return {
    type: MULTIPLE,
    payload,
  };
};

export const divide = (payload) => {
  return {
    type: DIVIDE,
    payload,
  };
};

const init = 0;

const counter = (state = init, action) => {
  console.log(action);
  switch (action.type) {
    case PLUS:
      return state + action.payload;
    case MINUS:
      return state - action.payload;
    case MULTIPLE:
      return state * action.payload;
    case DIVIDE:
      return state / action.payload;
    default:
      return state;
  }
};

export default counter;
