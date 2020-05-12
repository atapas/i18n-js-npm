/*
 * Created on Tue May 12 2020
 *
 * Copyright (c) 2020 https://tapasadhikary.com
*/


import * as Langs from '../../../i18n/index.js';


let clientPrimaryLang = navigator.languages[0];

let matchedLang = clientPrimaryLang.indexOf('-') > 0 ? 
                clientPrimaryLang.substring(0, clientPrimaryLang.indexOf('-')) : 
                clientPrimaryLang;

console.log(matchedLang);

const replaceParams = (replaced, ...params) => {
    params.forEach((item, index) => {
        let match = new RegExp(`\\{${index}\\}`);
        replaced = replaced.replace(match, item);
    });
    return replaced;
}

const i18n = (key, ...params) => {
    console.log(params);
    let value = '';
    
    if (Langs[matchedLang]) {
        value = Langs[matchedLang][key];
    } else {
        // If the user preferred language is not supported,
        // fallback to english('en')
        value = Langs['en'][key];
    }

    let replaced = value;
    if (params && params.length > 0) {
        // replace {0}, {1} etc with param 1 and param 2
        replaced = replaceParams(replaced, ...params);
    }
    return replaced;
};

export default i18n;
