import { SWITCH_VALIDATIONS } from 'Funtion/switchValidations.js';
import { isString, isArray, isValidString } from 'Utils/funtionsUtils.js';
import filter from 'lodash/filter';

export const multiErrorsValidation = data => {
  let result = { status: true };

  const DATA_ERRORS = data.map(newData => {
    const {
      curpMessageError,
      dateMessageError,
      emailMessageError,
      id,
      numberMessageError,
      requiredMessageError,
      rfckeyCodeMessageError,
      rfcMessageError,
      texNumMessageError,
      textMessageError,
      title,
      type,
      value,
    } = newData;

    let newResult = {
      error: 'El valor de type no es un array o un string con datos',
      id,
      status: false,
      title,
      type,
    };

    if (isArray(type) && type.length >= 1) {
      for (const NEW_TYPE of type) {
        const resultMulty = SWITCH_VALIDATIONS({
          curpMessageError,
          dateMessageError,
          emailMessageError,
          id,
          numberMessageError,
          requiredMessageError,
          rfcMessageError,
          rfckeyCodeMessageError,
          texNumMessageError,
          textMessageError,
          title,
          type: NEW_TYPE,
          value,
        });

        if (resultMulty.status === false) {
          newResult = resultMulty;
          break;
        } else {
          newResult = resultMulty;
        }
      }
      return newResult;
    } else if (isString(type) && !isValidString(type)) {
      return SWITCH_VALIDATIONS(newData);
    } else {
      return newResult;
    }
  });
  const errors = filter(DATA_ERRORS, { status: false });
  if (errors.length >= 1) {
    result = { ...result, errors, status: false };
  }
  return result;
};
