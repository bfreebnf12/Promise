/**
 * MULTIPLE PROMISES: .all(), .any(), .allSettled(), .race()
 * Please, make sure to read the "10 Multiple-promises.md" file in exercise-info folder before you start!
 * You can use each method only ONCE in this file (f.i. if you have used .any(), you can't use it again)
 * for the next task. The result4 is already using .race(), so you can't use it for result1, result2 or result3
 */
const promise1 = new Promise((res) => setTimeout(res, 4000, "RESOLVED AGAIN"));
const promise2 = Promise.reject("Promise 2 REJECTED");
const promise3 = Promise.resolve("Promise 3 RESOLVED");
const promise4 = new Promise((res) => setTimeout(res, 3000, "RESOLVED AGAIN"));
export const promiseArr = [promise1, promise2, promise3, promise4];

/**
 * @task
 * The handlePromise1 constant is expected to store the value of the reason of promise2 rejection
 * using the method to handle multiple promises.
 * The developer used a wrong multiple promises method of .any() to get the value
 * of the first rejected promise in the promiseArr array.
 * Please, refactor the code to use a proper method. You can use on of these:
 * * .all()
 * * .any()
 * * .allSettled()
 */
export const handlePromise1 = Promise.all(promiseArr)
    .then((val) => val)
    .catch((err) => err);




export const handlePromise2 = (promiseArr) => {
    return Promise.any(promiseArr)
        .then((result) => {
            return result; // Return the desired resolved value
        })
        .catch((errors) => {
            return errors; // Return the first error if all promises are rejected
        });
};

export const handlePromise3 = (promiseArr) => {
    return Promise.allSettled(promiseArr)
        .then((results) => {
            const statusesAndValues = results.map(result => {
                if (result.status === "fulfilled") {
                    return { status: "fulfilled", value: result.value };
                } else {
                    return { status: "rejected", reason: result.reason };
                }
            });
            return statusesAndValues;
        });
};

/**
 * @task
 * Update the filter method callback to filter out any promise that will be settled before promise4
 * so that the handlePromise4 function returns the resolved value of promise4 ('RESOLVED AGAIN')
 * with the Promise.race() method, when the newPromiseArr is passes as the argument.
 * The value of newPromiseArr MUST have more than one promise in the array!
 */

const promise4SettleTime = Date.now() + 3000; // Adjust the time as needed

export const newPromiseArr = promiseArr.filter((promise) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('RESOLVED AGAIN');
        }, 5000);
    });
});
// Do NOT refactor or update handlePromise4 function, it's all set to work
export const handlePromise4 = (arr) => {
    return Promise.race(arr)
        .then((val) => val)
        .catch((e) => e);
};




// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function