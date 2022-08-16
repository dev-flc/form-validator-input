import { isTitle } from 'Utils/funtionsUtils.js';
import { EN } from 'Utils/messages/en.js';
import { ES } from 'Utils/messages/es.js';
import { TYPE_LANGUAGE as TL } from 'Utils/constants.js';

const DATA_MESSAGES = (language, message, title) => {
  if (language === TL.EN) {
    return EN()[message](title);
  } else if (language === TL.ES) {
    return ES()[message](title);
  } else {
    return `The language property is invalid, please enter only "EN" or "ES"`;
  }
};

export const messageError = (title, language, textMessageError, message) => {
  if (!isTitle(textMessageError)) {
    return textMessageError;
  } else {
    return DATA_MESSAGES(language, message, title);
  }
};
