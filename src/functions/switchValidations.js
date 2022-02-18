import { isRequired, generalValidations } from 'Funtion/functions.js';

import { EXPRESSIONS as E } from 'Utils/expressions.js';

import { CONSTANTS as C } from 'Utils/constants.js';

export const SWITCH_VALIDATIONS = d => {
  let result = {};

  switch (d.type) {
    case 'R': // required data validation
      result = isRequired(
        d.value,
        C.MESSAGE_IS_REQUIRED,
        d.id,
        d.title,
        d.requiredMessageError
      );
      break;

    case 'T': // text data validation
      result = generalValidations(
        d.value,
        C.MESSAGE_IS_TEXT,
        E.EXP_TEXT,
        d.id,
        d.title,
        d.textMessageError
      );
      break;

    case 'N': // number data validation
      result = generalValidations(
        d.value,
        C.MESSAGE_IS_NUMBER,
        E.EXP_NUMBER,
        d.id,
        d.title,
        d.numberMessageError
      );
      break;

    case 'TN': // text and number data validation
      result = generalValidations(
        d.value,
        C.MESSAGE_IS_TEXT_NUMBER,
        E.EXP_TEXT_NUMBER,
        d.id,
        d.title,
        d.texNumMessageError
      );
      break;

    case 'DATE': // Dete data validation
      result = generalValidations(
        d.value,
        C.MESSAGE_IS_DATE,
        E.EXP_DATE,
        d.id,
        d.title,
        d.dateMessageError
      );
      break;

    case 'EMAIL': // Email data validation
      result = generalValidations(
        d.value,
        C.MESSAGE_IS_EMAIL,
        E.EXP_EMAIL,
        d.id,
        d.title,
        d.emailMessageError
      );
      break;

    case 'CURP': // CURP data validation
      result = generalValidations(
        d.value,
        C.MESSAGE_IS_CURP,
        E.EXP_CURP,
        d.id,
        d.title,
        d.curpMessageError
      );
      break;

    case 'RFC': // RFC data validation
      result = generalValidations(
        d.value,
        C.MESSAGE_IS_RFC_KEY_CODE,
        E.EXP_RFC,
        d.id,
        d.title,
        d.rfcMessageError
      );
      break;

    case 'RFC_KEY_CODE': // RFC key code data validation
      result = generalValidations(
        d.value,
        C.MESSAGE_IS_RFC,
        E.EXP_RFC_KEY_CODE,
        d.id,
        d.title,
        d.rfckeyCodeMessageError
      );
      break;

    default:
      result = {
        error: 'El tipo de validación no existe :(',
        id: d.id,
        status: false,
        title: d.title,
        type: d.type,
      };
      break;
  }
  return result;
};
