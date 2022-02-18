import {
  singleValidation,
  multiValidation,
  multiErrorsValidation,
} from './../src/index.js';
import { DUMMY_DATA } from './dumys.js';
console.log(
  '%c<== singleValidation ==>',
  'color:#FF8A71;font-size:1rem;font-weight:bold;,',
  singleValidation(DUMMY_DATA[0])
);

console.log(
  '%c<== multiValidation ==>',
  'color:#FF8A71;font-size:1rem;font-weight:bold;,',
  multiValidation(DUMMY_DATA)
);

console.log(
  '%c<== multiErrorsValidation ==>',
  'color:#FF8A71;font-size:1rem;font-weight:bold;,',
  multiErrorsValidation(DUMMY_DATA)
);
