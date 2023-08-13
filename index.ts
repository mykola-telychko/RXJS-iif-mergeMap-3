console.clear();
import { fromEvent, iif, of, interval, pipe } from 'rxjs';
import { mergeMap, finalize } from 'rxjs/operators';

// https://www.learnrxjs.io/learn-rxjs/operators/conditional/iif

// not even
interval(1000)
  .pipe(
    mergeMap((val) => iif(() => !!(val % 2), of(val)))
    // output: not even num 1,3,5...
  )
  .subscribe(console.log);
