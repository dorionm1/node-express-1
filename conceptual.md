### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  - Callbacks, Promises, and async/await.

- What is a Promise?
  - An object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.

- What are the differences between an async function and a regular function?
  - An async function returns a Promise and allows the use of await for asynchronous operations, while a regular function does not.

- What is the difference between Node.js and Express.js?
  - Node.js is a runtime environment for executing JavaScript on the server side, while Express.js is a web application framework built on top of Node.js for building web applications and APIs.

- What is the error-first callback pattern?
  - A convention where the first argument of a callback function is an error object (if any), followed by the results of the operation.

- What is middleware?
  - Functions that execute during the lifecycle of a request to the server, with access to the request and response objects, and the next middleware function in the application’s request-response cycle.

- What does the next function do?
  - It passes control to the next middleware function in the stack.



```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)
  - Performance: The requests are made sequentially, leading to longer overall execution time. They could be made concurrently using Promise.all.
  - Structure: The order of the returned array does not match the order of the requests, which could lead to confusion.
  - Naming: The function name getUsers is appropriate, but the variables elie, joel, and matt are hard-coded, which reduces reusability.
