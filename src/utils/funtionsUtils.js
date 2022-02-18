import { messageError } from 'Utils/messages.js';

export const isTitle = title => title === '';

export const isString = str =>
  Object.prototype.toString.call(str) === '[object String]';

export const isArray = data => Array.isArray(data);

export const isValidString = value =>
  value === null || value === '' || value === undefined;

export const resultError = (title, id, message, textMessageError) => ({
  error: messageError(title, textMessageError, message),
  id,
  status: false,
});
