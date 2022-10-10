import { displayLog } from './utils';
import { fromEvent } from 'rxjs';
import { map, tap, distinct } from 'rxjs/operators';

export default () => {
    /** start coding */
    const grid = document.getElementById('grid');
    const click$ = fromEvent(grid, 'click').pipe(
        // Obtener el valor de la columna y fila
        map(val => [ 
            Math.floor(val.offsetX/50), 
            Math.floor(val.offsetY/50)
        ]),
        map((val) => `${val[0]}-${val[1]}`),
        tap(val => console.log('select column / row', val)),
        // Mostrará en la UI si el valor de la suma de columna + fila
        // es diferente a lo que se ha mostrado anteriormente
        distinct()
    );

    click$.subscribe(data => displayLog(data));

    /** end coding */
}