import { ACTION_LAVEL } from '../constans/constanStore';

export default (state = {}, action = {}) => {
  if (!state) {
    return null;
  }

  let newState = state;
  const { type, payload, propertyName } = action;

  if (type === ACTION_LAVEL.SET_ACTION_LAVEL_1) {
    newState = { ...state, [propertyName]: payload };
  } else if (type === ACTION_LAVEL.SET_ACTION_LAVEL_2) {
    const nwState = { ...state.level2, [propertyName]: payload };
    newState = { ...state, level2: nwState };
  } else if (type === ACTION_LAVEL.SET_ACTION_LAVEL_3) {
    const nwState2 = { ...state.level2.level3, [propertyName]: payload };
    const nwState3 = { ...state.level2, level3: nwState2 };
    newState = { ...state, level2: nwState3 };
  }

  return newState;
};
