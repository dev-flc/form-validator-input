import { resultError, isString } from 'Utils/funtionsUtils.js';

const STATUS_TRUE = { status: true };

/* Required data validation */
export const isRequired = (
  value,
  messageDefault,
  id = '',
  title = '',
  requiredMessageError = ''
) =>
  value === null || value === '' || value === undefined
    ? resultError(title, id, messageDefault, requiredMessageError)
    : STATUS_TRUE;

/* General validations */
export const generalValidations = (
  value,
  messageDefault,
  exp,
  id = '',
  title = '',
  textMessageError = ''
) =>
  RegExp(exp).test(isString(value) ? value.trim() : value)
    ? STATUS_TRUE
    : resultError(title, id, messageDefault, textMessageError);
