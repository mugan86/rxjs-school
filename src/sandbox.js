import { displayLog } from "./utils";
import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

export default () => {
  const grid = document.getElementById("grid");
  const click$ = fromEvent(grid, "click").pipe(
    tap((val) => console.log("Before:", val)), // Muestra la información tal y como viene del origen
    map((val) => [Math.floor(val.offsetX / 50), Math.floor(val.offsetY / 50)]), // Transforma a lo que nosotros indicamos
    tap((val) => console.log(`After: ${val}`)) // Muestra la información transformada
  );

  const subscription = click$.subscribe((data) => displayLog(data));
};
