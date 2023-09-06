/**
 * PROMISE .resolve() and .reject() methods
 * Please, make sure to read the "08-Promise-shortcuts.md" file in exercise-info folder before you start!
 * In this task you need to refactor the resolved promise with a shortcut of Promise.resolve()
 * Then refactor the promise constructors with shortcuts.
 */

// === RESOLVED PROMISE
// Update the promiseResolved variable to use the shortcut syntax
export const promiseResolved = Promise.resolve("The PROMISE was RESOLVED");

// === REJECTED PROMISE
// Update the promiseRejected variable to use the shortcut syntax
export const promiseRejected = Promise.resolve('The PROMISE was REJECTED').then(data => data);

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function