import { ACTION_LAVEL } from '../constans/constanStore';

export const actionSetLevel1 = (propertyName, payload) => ({
  payload,
  propertyName,
  type: ACTION_LAVEL.SET_ACTION_LAVEL_1,
});

export const actionSetLevel2 = (propertyName, payload) => ({
  payload,
  propertyName,
  type: ACTION_LAVEL.SET_ACTION_LAVEL_2,
});

export const actionSetLevel3 = (propertyName, payload) => ({
  payload,
  propertyName,
  type: ACTION_LAVEL.SET_ACTION_LAVEL_3,
});
