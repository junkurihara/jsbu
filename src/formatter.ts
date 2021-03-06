/**
 * formatter.js
 */

import * as encoder from './encoder';
import TypedArray = NodeJS.TypedArray;

type SupportedPemTypes = 'public'|'private'|'encryptedPrivate'|'certificate'|'certRequest';
const PemArmorString: {[index: string]: string} = {
  'public': 'PUBLIC KEY',
  'private': 'PRIVATE KEY',
  'encryptedPrivate': 'ENCRYPTED PRIVATE KEY',
  'certificate': 'CERTIFICATE',
  'certRequest': 'CERTIFICATE REQUEST'
};

/**
 * Convert PEM armored string to Uint8Array
 * @param keydataB64Pem
 * @return {Uint8Array}
 */
export const pemToBin = (keydataB64Pem: string): Uint8Array|string => {
  const keydataB64 = dearmorPem(keydataB64Pem);
  return encoder.decodeBase64(keydataB64);
};

/**
 * Convert ArrayBuffer or TypedArray to PEM armored string with a specified type
 * @param keydata
 * @param type
 * @return {string}
 */
export const binToPem = (keydata: ArrayBuffer|TypedArray, type: SupportedPemTypes) => {
  const keydataB64 = encoder.encodeBase64(keydata);
  return formatAsPem(keydataB64, type);
};

/**
 * Armor the given Base64 string and return PEM formatted string
 * @param str
 * @param type
 * @return {string}
 */
const formatAsPem = (str: string, type: SupportedPemTypes): string => {
  const typeString = PemArmorString[type];

  let finalString = `-----BEGIN ${typeString}-----\n`;

  while (str.length > 0) {
    finalString += `${str.substring(0, 64)}\n`;
    str = str.substring(64);
  }

  finalString = `${finalString}-----END ${typeString}-----`;

  return finalString;
};

/**
 * Dearmor the given PEM string and return Base64 string
 * @param str
 * @return {string}
 */
const dearmorPem = (str: string): string => {
  // const beginRegExp = RegExp('^-----[\s]*BEGIN[^-]*KEY-----$', 'gm');
  // const endRegExp = RegExp('^-----[\s]*END[^-]*KEY-----$', 'gm');
  const beginRegExp = RegExp('^-----[\s]*BEGIN[^-]*-----$', 'gm');
  const endRegExp = RegExp('^-----[\s]*END[^-]*-----$', 'gm');

  // check if the object starts from 'begin'
  try {
    let dearmored = str.split(beginRegExp)[1].split(endRegExp)[0];
    dearmored = dearmored.replace(/\r?\n/g, '');

    return dearmored;
  } catch (e) {
    throw new Error('Invalid format as PEM');
  }
};

