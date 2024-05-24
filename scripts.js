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
  
  