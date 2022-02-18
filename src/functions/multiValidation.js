import { SWITCH_VALIDATIONS } from 'Funtion/switchValidations.js';
import { isString, isArray, isValidString } from 'Utils/funtionsUtils.js';

export const multiValidation = data => {
  const result = { status: true };

  for (const NEW_DATA of data) {
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
    } = NEW_DATA;

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
    } else if (isString(type) && !isValidString(type)) {
      newResult = SWITCH_VALIDATIONS(NEW_DATA);
    } else {
      return newResult;
    }
    if (!newResult.status) {
      return newResult;
    }
  }

  return result;
};
