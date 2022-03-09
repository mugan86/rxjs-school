import { displayLog } from './utils';
import { fromEvent } from "rxjs";
import { map, filter } from 'rxjs/operators';
export default () => {

    const grid = document.getElementById('grid');
    const click$ = fromEvent(grid, 'click').pipe(
        map((point) => [
            Math.floor(point.offsetX / 50), Math.floor(point.offsetY / 50)]),
        filter(val => (val[0] + val[1]) % 2 != 0) 
        // solo filtra la suma de las posiciones impares
        // que son las que corresponde a la casillas grises
    );

    const subscription = click$.subscribe((point) => displayLog(point))
}