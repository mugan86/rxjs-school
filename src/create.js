import { displayLog } from './utils';
import { from } from "rxjs";
export default () => {
    /** start coding */
    const myArray = [1, 2, 3, 4, 5];
    const myString = "Hello world";
    // from se usa sobre todo para convertir Promesas en observables
    const myPromise = new Promise(resolve => setTimeout(() => {
        resolve(myString)
    }, 2000));

    // Crear un observable a partir de un array
    // const observable = from(myArray);

    // Crear un observable a partir de un string (un array de carácteres)
    // const observable = from(myString);

    // Con una promise
    const observable = from(myPromise);

    const subscription = observable.subscribe((evt => displayLog(evt)));

    // Promises ejecutan un evento
    // Ovservable una serie de eventos con opción a cancelarlo
    /** end coding */
}