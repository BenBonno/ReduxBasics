const incrementAction = {
  type: "INCREMENT",
};

const decrementAction = {
  type: "DECREMENT",
};

const incrementByTen = {
  type: "INCREMENT_BY_TEN",
};

const decrementByTen = {
  type: "DECREMENT_BY_TEN",
};

const reset = {
  type: "RESET",
};

let initialState = 0;
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "INCREMENT_BY_TEN":
      return state + 10;
    case "DECREMENT_BY_TEN":
      return state - 10;
    case "RESET":
      return (state = 0);
    default:
      return state;
  }
};

// Store
const { createStore } = Redux;
const store = createStore(counterReducer);

const counterRender = document.getElementById("counter-render");
const incrementButton = document.getElementById("button-increment");
const decrementButton = document.getElementById("button-decrement");
const incrementByTenButton = document.getElementById("button-increment-ten");
const decrementByTenButton = document.getElementById("button-decrement-ten");
const resetButton = document.getElementById("reset");

// Render
const render = () => {
  counterRender.innerHTML = store.getState();
  console.log(store.getState());
};
render();
store.subscribe(render);

incrementButton.addEventListener("click", () => {
  store.dispatch(incrementAction);
});
decrementButton.addEventListener("click", () => {
  store.dispatch(decrementAction);
});
incrementByTenButton.addEventListener("click", () => {
  store.dispatch(incrementByTen);
});
decrementByTenButton.addEventListener("click", () => {
  store.dispatch(decrementByTen);
});
resetButton.addEventListener("click", () => {
  store.dispatch(reset);
});
