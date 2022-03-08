import { displayLog } from "./utils";
// of : Secuencia variable de objetos de distinta tipologia
import { of, range } from "rxjs";
// range: Para trabajar con una secuencia de números

// Estos dos servirá para crear observables a partir de secuencia de datos
export default () => {
  /** start coding */
  const source = of(1, 2, 3, 4, 5, 6);
  const sourceTwo = of(
    [1, 2, 3],
    "Hello world",
    { foo: "Bar" },
    function sayHello() {
      return "Hi!";
    }
  );
  const sourceThree = range(3, 10);
  const subscription = sourceThree.subscribe((evt) => displayLog(evt));

  /** end coding */
};
