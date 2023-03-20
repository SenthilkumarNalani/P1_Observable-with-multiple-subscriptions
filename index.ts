import { Observable } from 'rxjs';

// Note: We can see, each Subscription executed the Observable's logic independently.
// And we've observed also a one second delay between the values which reached the Observers provided for each Subscription.
// So, as we can see, subscribing is just like calling or executing the function inside of the Observable again or independently from other subscriptions.
// And in other words, each time we call the subscribe method on the Observable, the function embedded inside of the Observable is run. So each Subscription is a separate independent Observable's execution.

const observable$ = new Observable<string>((subscriber) => {
  console.log('observable executed!');
  subscriber.next('Mahathi');
  setTimeout(() => subscriber.next('Chenchu Lakshmi'), 2000);
  setTimeout(() => subscriber.next('Mahi Chenchith'), 4000);
});

console.log('Subscription 1 starts!');
observable$.subscribe((value) => {
  // Next notification handler or data handler
  console.log('Subscription 1: ', value);
});

setTimeout(() => {
  console.log('Subscription 2 starts!');
  observable$.subscribe((value) => {
    console.log('Subscription 2: ', value);
  });
}, 1000);
