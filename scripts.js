// Initial state
/**
 * The initial state of the application.
 * @type {Object}
 * @property {number} count - The initial count value.
 */
const initialState = {
    count: 0,
};

// Action types
  /**
   * action type for incrementing the count.
   * @type {string}
   */
  const INCREMENT = "INCREMENT";
  
  /**
   * action type for decrementing the count.
   * @type {string}
   */
  const DECREMENT = "DECREMENT";
  
  /**
   * action type for resetting the count.
   * @type {string}
   */
  const RESET = "RESET";
  
  /**
   * action type for adding a value to the count.
   * @type {string}
   */
  const ADD = "ADD";
  
  /**
   * action type for subtracting a value from the count.
   * @type {string}
   */
  const SUBTRACT = "SUBTRACT";

  // Action creators
  /**
   * Increments the count by 1.
   * @returns {Object} The action object.
   */
  const increment = () => ({ type: INCREMENT });
  
  /**
   * Decrements the count by 1.
   * @returns {Object} The action object.
   */
  const decrement = () => ({ type: DECREMENT });
  
  /**
   * Resets the count to 0.
   * @returns {Object} The action object.
   */
  const reset = () => ({ type: RESET });
  
  /**
   * Adds a value to the count.
   * @param {number} value - The value to add.
   * @returns {Object} The action object.
   */
  const add = (value) => ({ type: ADD, payload: value });
  
  /**
   * Subtracts a value from the count.
   * @param {number} value - The value to subtract.
   * @returns {Object} The action object.
   */
  const subtract = (value) => ({ type: SUBTRACT, payload: value });
  
  // Reducer
  /**
   * reducer function handles state changes based on actions.
   * @param {Object} state - current state.
   * @param {Object} action - action object.
   * @returns {Object} - the new state.
   */
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case INCREMENT:
        return { ...state, count: state.count + 1 };
      case DECREMENT:
        return { ...state, count: state.count - 1 };
      case RESET:
        return { ...state, count: 0 };
      case ADD:
        return { ...state, count: state.count + action.payload };
      case SUBTRACT:
        return { ...state, count: state.count - action.payload };
      default:
        return state;
    }
  };
  
  