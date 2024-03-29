<div id="top"></div>
<center>
  <h1 style="
  background: linear-gradient(89.97deg, #ae67fa 1.84%, #f49867 102.67%);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  font-family: $font-family;
  font-size: 50px;
  line-height: 75px;
  font-weight: 800;
  "> f o r m  -  v a l i d a t o r  -  i n p u t</h1>
</center>

## **Description**

 sdflskdfkldsf

<p align="right"><a href="#top">volver arriba 🔼</a></p>

--------------------------------------------------------------------------------

## **Installation**

```bash
npm install react form-validator-input
```

<p align="right"><a href="#top">volver arriba 🔼</a></p>

--------------------------------------------------------------------------------

## **Getting Started**

> ### **Types Of Languages**
|  name                                                         |           Description               | Default value  |
| --------------------------------------------------------------|-------------------------------------|----------------|
| <img src ="https://img.shields.io/badge/EN-success">          | error messages in english language  |      ✅        |
| <img src ="https://img.shields.io/badge/ES-success">          | error messages in spanish language  |                |


> ### **Types Of Validations**

|  name                                                         |           Description                 |
| --------------------------------------------------------------|---------------------------------------|
| <img src ="https://img.shields.io/badge/R-success">              | Required data validation           |
| <img src ="https://img.shields.io/badge/C-success">              | Required data for combo            |
| <img src ="https://img.shields.io/badge/T-success">              | Text data validation               |
| <img src ="https://img.shields.io/badge/N-success">              | Number data validation             |
| <img src ="https://img.shields.io/badge/TN-success">             | Text and number data validation    |
| <img src ="https://img.shields.io/badge/DATE-success">           | Date data validation               |
| <img src ="https://img.shields.io/badge/EMAIL-success">          | Email data validation              |
| <img src ="https://img.shields.io/badge/CURP-success">           | CURP data validation               |
| <img src ="https://img.shields.io/badge/RFC-success">            | RFC data validation                |
| <img src ="https://img.shields.io/badge/RFC_KEY_CODE-success">   | RFC KEY code data validation       |

> ### **Parameter description**

  <br/>
  <img src ="https://img.shields.io/badge/Required parameter-success">
  <img src ="https://img.shields.io/badge/Optional parameter-blue">

|  name                                                                 |           Description                             |
| ----------------------------------------------------------------------|---------------------------------------------------|
| <img src ="https://img.shields.io/badge/id-success">                  | Input identifier                                  |
| <img src ="https://img.shields.io/badge/value-success">               | Value to validate,  `String` and   `Number`       |
| <img src ="https://img.shields.io/badge/type-success">                | Type validation  `["R","T","...","RFC_KEY_CODE"]` |
| <img src ="https://img.shields.io/badge/title-blue">                  | Title of the entry to validate                    |
| <img src ="https://img.shields.io/badge/curpMessageError-blue">       | personalized message for CURP                     |
| <img src ="https://img.shields.io/badge/dateMessageError-blue">       | personalized message for date                     |
| <img src ="https://img.shields.io/badge/emailMessageError-blue">      | personalized message for email                    |
| <img src ="https://img.shields.io/badge/numberMessageError-blue">     | personalized message for number                   |
| <img src ="https://img.shields.io/badge/requiredMessageError-blue">   | personalized message for required                 |
| <img src ="https://img.shields.io/badge/rfcMessageError-blue">        | personalized message for RFC                      |
| <img src ="https://img.shields.io/badge/rfckeyCodeMessageError-blue"> | personalized message for RFC KEY CODE             |
| <img src ="https://img.shields.io/badge/texNumMessageError-blue">     | personalized message for text and number          |
| <img src ="https://img.shields.io/badge/textMessageError-blue">       | personalized message for text                     |

> ### **Import / Require**

```javascript
// ES6+ example

import {
  singleValidation,
  multiValidation,
  multiErrorsValidation,
} from "form-validator-input";

singleValidation(DATA);
multiValidation(DATA);
multiErrorsValidation(DATA);

```

```javascript
// ES5 example

const {
  singleValidation,
  multiValidation,
  multiErrorsValidation,
} = require("form-validator-input");

singleValidation(DATA);
multiValidation(DATA);
multiErrorsValidation(DATA);

```

```javascript
No ES+

const formValidatorInput = require("form-validator-input");

formValidatorInput.singleValidation(DATA);
formValidatorInput.multiValidation(DATA);
formValidatorInput.multiErrorsValidation(DATA);
```
<p align="right"><a href="#top">volver arriba 🔼</a></p>

--------------------------------------------------------------------------------

## **Usage**

**Example function _singleValidation()_**
```javascript
import { singleValidation } from "form-validator-input";
/* successful */
console.log(singleValidation({
  id: "example_text",
  title: "TITULO UNO",
  type: ["T"],
  value: "texto",
}))

Result: successful
{ status: true }

/* successful - more than one validation */
console.log(singleValidation({
  id: "example_text",
  title: "TITULO UNO",
  type: [ "R", "T" ], // <=== more than one validation
  value: "texto",
}))

Result: successful
{ status: true }

/* error  */
console.log(singleValidation({
  id: "example_error_text",
  type: ["T"],
  value: 345, // <=== value type number
}))

Result: error
{ error: 'El dato no es válido, ingresa sólo letras.', id: 'example_error_text', status: false }

/* error - title */
console.log(singleValidation({
  id: "example_error_text",
  title: "title", // <=== the title contains information
  type: ["T"],
  value: "345", // <=== value type number
}))

Result: error
{ error: 'El dato example_text, no es válido, ingresa sólo letras.', id: 'example_error_text', status: false }

/* error - custom text message */
console.log(singleValidation({
  id: "example_error_text",
  title: "title",
  type: ["T"],
  textMessageError: "custom text message", // <=== custom message contains information
  value: "", // <=== empty value
}))

Result: custom text message
{ error: 'custom text message', id: 'example_error_text', status: false }


```


**Example function _multiValidation()_**
```javascript
import { multiValidation } from "form-validator-input";

let const DATA = {
  {
    id: "example_text",
    title: "title required and text",
    type: ["R","T"],
    value: "texto",
  },
  {
    id: "example_text",
    title: "title number",
    type: ["N"],
    value: 12345,
  },
  {
    id: "example_text",
    title: "title require text and number",
    type: ["R","TN"],
    value: "texto 12345",
  }
}

let const DATA_ERROR = {
  {
    id: "example_text",
    title: "title required and text",
    type: ["R","T"],
    value: "texto",
  },
  {
    id: "example_text",
    title: "title number",
    type: ["N"], // validation type number
    value: "sdfsd", // <=== value type string
  },
  {
    id: "example_text",
    title: "title require text and number",
    type: ["R","TN"],
    value: "", // <=== empty value
  }
}

let const DATA_ERROR_CUSTOM_MESSAGE = {
  {
    id: "example_text",
    title: "title required and text",
    type: ["R","T"],
    value: "texto",
  },
  {
    id: "example_text",
    title: "title require text and number",
    requiredMessageError: 'custom required message',
    texNumMessageError: 'custom text and number message',
    type: ["R","TN"],
    value: "", // <=== empty value
  },
  {
    id: "example_text",
    title: "title number",
    type: ["N"], // validation type number
    value: "sdfsd", // <=== value type string
  }
}
/* successful */
console.log(multiValidation(DATA))

Result: successful
{ status: true }

/* error  */
console.log(multiValidation(DATA_ERROR))

Result: error
{ status: false, id: "title" }

/* error - title */
console.log(multiValidation(DATA_ERROR))

Result: error
{error: 'El dato title number no es válido, ingresa sólo números.', id: 'example_text', status: false}

```


**Example function _multiErrorsValidation()_**
```javascript
import { multiErrorsValidation } from "form-validator-input";
let const DATA = {
  {
    id: "example_text",
    title: "title required and text",
    type: ["R","T"],
    value: "texto",
  },
  {
    id: "example_text",
    title: "title number",
    type: ["N"],
    value: 12345,
  },
  {
    id: "example_text",
    title: "title require text and number",
    type: ["R","TN"],
    value: "texto 12345",
  }
}

let const DATA_ERROR = {
  {
    id: "example_text",
    title: "title required and text",
    type: ["R","T"],
    value: "texto",
  },
  {
    id: "example_text",
    title: "title number",
    type: ["N"], // validation type number
    value: "sdfsd", // <=== value type string
  },
  {
    id: "example_text",
    title: "title require text and number",
    type: ["R","TN"],
    value: "", // <=== empty value
  }
}
/* successful */
console.log(multiErrorsValidation(DATA))

Result: successful
{ status: true }

/* error  */
console.log(multiErrorsValidation(DATA_ERROR))

Result: error
{
  errors: [
    { error: 'El dato no es válido, ingresa sólo letras.', id: 'example_text', status: false},
    { error: 'El dato title number no es válido, ingresa sólo números.', id: 'example_text', status: false},
    { error: 'custom required message', id: 'example_text', status: false},
  ];
  status: false
}


```


**Example function type language**


**EN**

```javascript
import { singleValidation } from "form-validator-input";
// EN
/* error  */
console.log(singleValidation({
  id: "example_error_text",
  type: ["T"],
  value: 345, // <=== value type number
},"EN"))

Result: error
{ error: 'El dato no es válido, ingresa sólo letras.', id: 'example_error_text', status: false }

/* error - title */
console.log(singleValidation({
  id: "example_error_text",
  title: "title", // <=== the title contains information
  type: ["T"],
  value: "345", // <=== value type number
},"EN"))

Result: error
{ error: 'El dato example_text, no es válido, ingresa sólo letras.', id: 'example_error_text', status: false }

```
**ES**

```javascript
import { singleValidation } from "form-validator-input";
// EN
/* error  */
console.log(singleValidation({
  id: "example_error_text",
  type: ["T"],
  value: 345, // <=== value type number
},"ES"))

Result: error
{ error: 'El dato no es válido, ingresa sólo letras.', id: 'example_error_text', status: false }

/* error - title */
console.log(singleValidation({
  id: "example_error_text",
  title: "title", // <=== the title contains information
  type: ["T"],
  value: "345", // <=== value type number
},"ES"))

Result: error
{ error: 'El dato example_text, no es válido, ingresa sólo letras.', id: 'example_error_text', status: false }

```

<p align="right"><a href="#top">volver arriba 🔼</a></p>

## **Contributors**

<a href="https://github.com/ferch01992">
  <img src="https://avatars.githubusercontent.com/u/20364582?v=4" style="border-radius: 50% !important;" min-width="50px" max-width="50px" width="50px" height="50px"/>
</a>

<p align="right"><a href="#top">volver arriba 🔼</a></p>

## **License MIT**

```
MIT License

Copyright (c) 2021 Ferch01992

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```

<p align="right"><a href="#top">volver arriba 🔼</a></p>
