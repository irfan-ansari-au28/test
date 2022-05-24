import { DECREASE_COUNT, INCREASE_COUNT, SET_COUNT } from "./actionTypes";

export const increaseCount = (payload = 1) => ({
  type: INCREASE_COUNT,
  payload: payload,
});

export const decreaseCount = (payload = 1) => ({
  type: DECREASE_COUNT,
  payload,
});

export const setCount = (payload = 20) => ({
  type: SET_COUNT,
  payload,
});
