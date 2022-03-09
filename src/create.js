import { displayLog } from './utils';
import { interval, time, timer } from "rxjs";
export default () => {
    /** start coding */
    const source = interval(500); // 0.5 sg el intervalo
    const subscription = source.subscribe((value) => displayLog(value));
    // a diferencia de "range" y "of" ejecuta una secuencia
    // que no termina nunca mientras no cancelemos el flujo
    // Para ello deberíamos de gestionar esa suscripción desde
    // fuera

    // Podemos hacerlo con un "setTimeOut" y dentro usar
    // unsubscribe con "subscription"

    /*setTimeout(() => {
        subscription.unsubscribe();
    }, 3000)*/

    timer(3000).subscribe(() => subscription.unsubscribe());
    /** end coding */
}