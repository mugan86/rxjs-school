import { displayLog } from './utils';
import { fromEvent } from 'rxjs';
import { map, tap, distinctUntilChanged } from 'rxjs/operators';

export default () => {
    /** start coding */
    const grid = document.getElementById('grid');
    const click$ = fromEvent(grid, 'click').pipe(
        // Obtener el valor de la columna y fila
        map(val => [
            Math.floor(val.offsetX / 50),
            Math.floor(val.offsetY / 50)
        ]),
        tap(val => console.log('select column / row', val)),
        // Mostrará en la UI el valor si lo que comparamos es DIFERENTE
        // Solo bloquea clicks consecutivos al mismo punto
        distinctUntilChanged((cellOne, cellTwo) => cellOne[0] === cellTwo[0] && cellOne[1] === cellTwo[1])
    );

    click$.subscribe(data => displayLog(data));

    /** end coding */
}