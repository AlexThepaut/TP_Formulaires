import { FormControl } from "@angular/forms";
import _ from 'lodash';
/**
* Le valeur du champ commennce-t-elle par nk-
* @param {FormControl} control
* @returns {{isTelValid: boolean}}
*/
export function isTelValidValidator(control: FormControl) {
    const regexTel1 = /([0-9]{2}( |-|)){4}[0-9]{2}/g;
    const regexTel2 = /^[0]/g;
    console.log(regexTel1.test(control.value) && regexTel2.test(control.value))
    return (control.value == '' || (regexTel1.test(control.value) && regexTel2.test(control.value))) ? null : { isTelValid: true };
};