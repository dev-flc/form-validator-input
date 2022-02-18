import { isTitle } from 'Utils/funtionsUtils.js';
import { CONSTANTS as C } from 'Utils/constants.js';

const DATA_MESSAGES = () => ({
  [C.MESSAGE_IS_CURP]: title =>
    isTitle(title) ? `El dato no es válido` : `El dato ${title} no es válido`,

  [C.MESSAGE_IS_DATE]: title =>
    isTitle(title) ? `El dato no es válido` : `El dato ${title} no es válido`,

  [C.MESSAGE_IS_EMAIL]: title =>
    isTitle(title) ? `El dato no es válido` : `El dato ${title} no es válido`,

  [C.MESSAGE_IS_NUMBER]: title =>
    isTitle(title)
      ? `El dato no es válido, ingresa sólo números.`
      : `El dato ${title} no es válido, ingresa sólo números.`,

  [C.MESSAGE_IS_REQUIRED]: title =>
    isTitle(title) ? `El dato es requerido.` : `El dato ${title} es requerido.`,

  [C.MESSAGE_IS_RFC]: title =>
    isTitle(title) ? `El dato no es válido` : `El dato ${title} no es válido`,

  [C.MESSAGE_IS_RFC_KEY_CODE]: title =>
    isTitle(title) ? `El dato no es válido` : `El dato ${title} no es válido`,

  [C.MESSAGE_IS_TEXT]: title =>
    isTitle(title)
      ? `El dato no es válido, ingresa sólo letras.`
      : `El dato ${title}, no es válido, ingresa sólo letras.`,

  [C.MESSAGE_IS_TEXT_NUMBER]: title =>
    isTitle(title)
      ? `El dato no es válido, ingresa sólo letras y números.`
      : `El dato ${title} no es válido, ingresa sólo letras y números.`,
});

export const messageError = (title, textMessageError, message) => {
  if (!isTitle(textMessageError)) {
    return textMessageError;
  } else {
    return DATA_MESSAGES()[message](title);
  }
};
