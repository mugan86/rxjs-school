import { displayLog } from './utils';
import { Observable } from 'rxjs';

export default () => {
    /** start coding */
    const hello = new Observable(function(observer) {
        observer.next('Hello');
        setTimeout(()=>{
            observer.next('World');
            observer.complete();
        }, 2000);

    });

    // Observador para mosstrar los diferentes estados
    const observer = {
        next: evt => displayLog(evt),
        error: err => console.error("ERROR"),
        complete: () => displayLog("[DONE]")
    }
    
    const subscribe = hello.subscribe(observer);
    const subscribe2 = hello.subscribe(observer);
    // Esto hará que después de emitir "hello" se dessuscriba al ser
    // "world" algo que se ejecutará de manera asíncrona y no síncrona
    subscribe.unsubscribe();
    /** end coding */
}