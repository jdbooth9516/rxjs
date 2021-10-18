import { Observable } from 'rxjs';

/**
 * Here the promise uses the resolve and reject
 *  resolve is what the promise will return
 *  reject is what the promise will return if there is an error
 */
const promise = new Promise((resolve, reject) => {
  resolve([1, 2, 3]);
  /**
   * as Promises are single use only the below resolve will not actualy do anything
   */
  resolve([4, 5, 6]);
});
/**
 * Here the observable on take the one Param
 * error handling is done by the .error function
 */
const observable = new Observable((observer) => {
  observer.next([4, 5, 6]);

  setTimeout(() => {
    observer.error('oh Mai');
  }, 1000);
});

promise.then((result) => {
  console.log(result);
});

observable.subscribe(
  (result) => {
    console.log(result);
  },
  (err) => console.log('err', err)
);
