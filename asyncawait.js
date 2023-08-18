/*
const userLogin = () => {
    console.log('Enter Username and Password');
    let username = prompt("Enter username: ");
    let password = prompt("Enter password: ");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Performing User Authentication');
            if (username === "deniz" && password === "deniz") {
                resolve("User Authenticated!");
            } else {
                reject("Authentication Failed");
            }
        }, 1000);
    });
};

function goToHomePage(userAuthStatus) {
    return Promise.resolve(`Go to Homepage as: ${userAuthStatus}`);
}

// userLogin()
//     .then((response) => {
//         console.log('Validated User');
//         return goToHomePage(response);
//     })
//     .then((userAuthStatus) => {
//         console.log(userAuthStatus);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

async function performTask() {
    try {
        const response = await userLogin();
    console.log('Validated User');
    const userAuthStatus = await goToHomePage(response);
    console.log(userAuthStatus);
    } catch (err) {
        console.log(err);
    }
    
}

performTask();
*/

//Performance Promises vs Async wait
const makeApiCall = (time) => {
    return () => 
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("This API executed in : " + time);        
        }, time);
    });
};

const apiRequests = [makeApiCall(1000), makeApiCall(2000), makeApiCall(500)]

// Promise.all(apiRequests).then((values) => {
//     console.log(values);
// });

(async function() {
    for (let request of apiRequests) {
        console.log(await request());
    }
})();