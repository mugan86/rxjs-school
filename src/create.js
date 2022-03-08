import { Observable } from "rxjs";
import { displayLog } from "./utils"
export default () => {
    /** start coding */

    const hello = new Observable (function(observer) {
        observer.next("Hello");
        setTimeout(() => {
            observer.next("World");
        }, 2000);
        
    });

    const subscribe = hello.subscribe((data) => displayLog(data));
    /** end coding */
}