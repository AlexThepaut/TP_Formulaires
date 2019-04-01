import { FormControl } from "@angular/forms";
import _ from 'lodash';
/**
* Le valeur du champ commennce-t-elle par nk-
* @param {FormControl} control
* @returns {{isFirstCharUppercase: boolean}}
*/
export function isFirstCharUppercaseValidator(control: FormControl) {
    return control.value === _.upperFirst(control.value) ? null : { isFirstCharUppercase: true };
};