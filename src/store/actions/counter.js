import * as actionTypes from './actionTypes';

export const increment = () => ({
  type: actionTypes.INCREMENT
});

export const decrement = () => ({
  type: actionTypes.DECREMENT
});

export const add = val => ({
  type: actionTypes.ADD,
  val
});

export const subtract = val => ({
  type: actionTypes.SUBTRACT,
  val
});
