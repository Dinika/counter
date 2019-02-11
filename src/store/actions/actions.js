export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => ({
  type: INCREMENT
});

export const decrement = () => ({
  type: DECREMENT
});

export const add = val => ({
  type: ADD,
  val
});

export const subtract = val => ({
  type: SUBTRACT,
  val
});

export const storeResult = result => ({
  type: STORE_RESULT,
  result
});

export const deleteResult = id => ({
  type: DELETE_RESULT,
  resultElId: id
});
