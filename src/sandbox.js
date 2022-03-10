import { displayLog } from './utils';
import { fromEvent } from 'rxjs';
import { map, takeLast, takeWhile, tap, skip} from 'rxjs/operators';

export default () => {
    /** start coding */
    const grid = document.getElementById('grid');
    const click$ = fromEvent(grid, 'click').pipe(
        map(val => [ 
            Math.floor(val.offsetX/50), 
            Math.floor(val.offsetY/50)
        ]),
        //takeWhile( ([col, row]) => col > 3 ),
        // takeWhile lo usamos con last y takeLast
        tap(val => console.log(`Cell: [${val}`)),
        skip(3)
        // last() // Obtener el último válido (takeWhile) cuando el flujo se cierra
        // takeLast(3) 
        // Obtener los últimos n elementos válidos cuando se cierre el flujo
    );

    const subscription = click$.subscribe(data => displayLog(data));

    /** end coding */
}