/*
const promise = new Promise((resolve, reject) => {
    console.log('Async task execution');
    throw "err";
    if (false) {
        const person = {name : "Deniz"}
        resolve(person);
    }
    else {
        const error = { errCode: "1001" };
        reject(error);
    }
});

promise.then(
    (val) => {console.log(val);}
    
).catch((err) => console.log(err))
.finally(() => {console.log('clean up')});
*/

/*
let p = Promise.resolve("execution is done");
// let p = Promise.reject("execution is rejected");

p.then((val) => console.log(val));
*/

/*
function asyncTask() {
    return Promise.resolve();
}

asyncTask().then(() => console.log(name));
const name = "Deniz";
*/

/*
const p = Promise.reject("failed");

p.then((val) => {
    console.log(val);
    return "done2";
}).then((val) => {
    console.log(val);
    return "done3";
})
.then((val) => console.log(val))
.catch((val) => console.log(val));
*/


const makeApiCall = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("This API executed in: " + time);
        }, time);
    });
};

// makeApiCall(1000).then((val) => console.log(val))
let multiApiCall = [makeApiCall(1000), makeApiCall(2000), makeApiCall(500)];

Promise.all(multiApiCall).then((values) => {
    console.log(values);
});

Promise.race(multiApiCall).then((value) => {
    console.log(value);
})