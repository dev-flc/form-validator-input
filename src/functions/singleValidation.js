import { SWITCH_VALIDATIONS } from 'Funtion/switchValidations.js';
import { isString, isArray, isValidString } from 'Utils/funtionsUtils.js';

export const singleValidation = data => {
  const {
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
    type,
    value,
  } = data;

  let result = {
    error: 'El valor de type no es un array o un string con datosz',
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
        result = resultMulty;
        break;
      } else {
        result = resultMulty;
      }
    }
  } else if (isString(type) && !isValidString(type)) {
    result = SWITCH_VALIDATIONS(data);
  }

  return result;
};
